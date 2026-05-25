export function Post1() {
  return (
    <>
      <p>
        Our subscription processing pipeline was timing out on large tenants.
        Not occasionally — predictably, every billing cycle. The fix didn&apos;t
        require a new database, a bigger instance, or a fancy cache. It
        required <strong>looking at the access pattern instead of the
        code</strong>.
      </p>

      <p>
        This post walks through the redesign that cut our database load by
        roughly 99% and made the timeout class of incidents simply stop
        happening.
      </p>

      <h2>The original design</h2>

      <p>
        The pipeline processed subscriptions one order at a time. For each
        order it needed pricing rules, contract terms, partner config, and a
        handful of related entities. The implementation looked something like
        this — simplified, but representative:
      </p>

      <pre>
        <code>{`for (Order order : subscription.getOrders()) {
    PricingRules rules = pricingRepo.findForOrder(order.getId());
    ContractTerms terms = contractRepo.findForOrder(order.getId());
    PartnerConfig partner = partnerRepo.findForOrder(order.getId());
    // ... more lookups
    processor.process(order, rules, terms, partner);
}`}</code>
      </pre>

      <p>
        For a small subscription with 20 orders, that&apos;s 60+ database
        round-trips. For our largest tenants with subscriptions in the
        thousands of orders, it was tens of thousands of queries inside a
        single processing job. MySQL was healthy. The connection pool was
        healthy. The application was simply blocked on I/O for so long that
        the surrounding transaction timed out.
      </p>

      <h2>The wrong fixes (that we considered)</h2>

      <ul>
        <li>
          <strong>Bigger MySQL.</strong> Treats the symptom, ignores the
          shape of the workload.
        </li>
        <li>
          <strong>A Redis cache layer.</strong> Same N round-trips, just to
          a different system; adds a cache-invalidation problem we
          didn&apos;t have.
        </li>
        <li>
          <strong>Async fan-out with a queue.</strong> Would have helped
          throughput but the per-job latency was the actual SLA violation.
        </li>
      </ul>

      <h2>The actual fix: invert the access pattern</h2>

      <p>
        The orders in a subscription share most of their lookup data. The
        loop was repeatedly asking the database for things it had already
        seen. So we stopped asking per-order and started asking
        per-subscription.
      </p>

      <pre>
        <code>{`// Load everything once, keyed by orderId, into memory.
Map<Long, PricingRules>   rulesByOrder    =
    pricingRepo.findForSubscription(subscription.getId());
Map<Long, ContractTerms>  termsByOrder    =
    contractRepo.findForSubscription(subscription.getId());
Map<Long, PartnerConfig>  partnerByOrder  =
    partnerRepo.findForSubscription(subscription.getId());

for (Order order : subscription.getOrders()) {
    processor.process(
        order,
        rulesByOrder.get(order.getId()),
        termsByOrder.get(order.getId()),
        partnerByOrder.get(order.getId())
    );
}`}</code>
      </pre>

      <p>
        Same inputs. Same outputs. But now: a fixed number of queries per
        subscription, regardless of size. The processing loop itself became
        a series of O(1) map lookups.
      </p>

      <h2>Why this worked so well</h2>

      <p>
        Three things compounded:
      </p>

      <ol>
        <li>
          <strong>Query count collapsed.</strong> Subscriptions with 2,000
          orders went from ~6,000 queries to ~3. That&apos;s where the 99%
          number comes from.
        </li>
        <li>
          <strong>Network round-trips disappeared.</strong> Most of our
          wall-clock time wasn&apos;t MySQL execution, it was 100k+
          round-trips to MySQL. Bundling SQL into a few large queries took
          us off the network entirely for the hot loop.
        </li>
        <li>
          <strong>MySQL got happier too.</strong> Fewer parses, fewer
          locks, less buffer-pool churn. The optimizer can do more with one
          query that returns 2,000 rows than with 2,000 queries that
          return 1.
        </li>
      </ol>

      <h2>The watchouts</h2>

      <p>
        This pattern isn&apos;t free. A few things to keep in mind:
      </p>

      <ul>
        <li>
          <strong>Memory.</strong> You&apos;re moving a working set into
          the JVM. We measured the largest subscription, sized for it, and
          added a hard cap with chunked commits for pathological cases.
        </li>
        <li>
          <strong>Staleness.</strong> If the loaded data can change
          mid-processing, batch loading makes that staleness visible.
          We&apos;re working from a billing snapshot, so this was fine.
        </li>
        <li>
          <strong>Repository surface area.</strong> You need
          <code>findForSubscription</code> variants. Worth it.
        </li>
      </ul>

      <h2>Lessons</h2>

      <blockquote>
        Most production performance problems are not about how fast a query
        runs — they&apos;re about how often you ask it.
      </blockquote>

      <p>
        Before reaching for caches, queues, or vertical scaling, look at
        the loop. Often the cheapest, most durable optimization is to
        change <em>what you ask the database for</em>, not how fast it
        answers.
      </p>
    </>
  );
}
