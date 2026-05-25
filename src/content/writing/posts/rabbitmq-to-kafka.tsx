export function Post2() {
  return (
    <>
      <p>
        We moved our billing and payment workflows off RabbitMQ and onto
        Kafka. It took months, processed millions of events per day, and we
        did it without a maintenance window or a single lost event. This
        post is the strategy that made that possible — and the parts
        I&apos;d still keep if I had to do it again tomorrow.
      </p>

      <h2>Why move at all</h2>

      <p>
        RabbitMQ had served us well, but the system had outgrown it:
      </p>

      <ul>
        <li>
          <strong>Replay was painful.</strong> Once a message was acked, it
          was gone. Rebuilding state after a bug required a database
          snapshot and a custom backfill job — every time.
        </li>
        <li>
          <strong>Ordering was best-effort.</strong> Per-tenant ordering
          across consumers required a single queue per tenant, which
          didn&apos;t scale.
        </li>
        <li>
          <strong>Backpressure was opaque.</strong> Spikes during monthly
          billing runs would silently grow the queue depth until we got
          paged.
        </li>
      </ul>

      <p>
        Kafka&apos;s partition-as-an-ordered-log model fixed all three.
        Partition by <code>tenantId</code> and you get ordering per tenant
        for free. Replay is just resetting an offset. Lag is a first-class
        metric.
      </p>

      <h2>The migration strategy: dual-write + shadow consumers</h2>

      <p>
        We needed to migrate without downtime and without trusting
        ourselves. The plan had four phases.
      </p>

      <h3>Phase 1 — Dual write</h3>

      <p>
        Every producer started writing to both RabbitMQ <em>and</em> Kafka.
        RabbitMQ remained the source of truth for downstream consumers.
      </p>

      <pre>
        <code>{`messageBroker.publish(event);     // existing RabbitMQ path
kafkaTemplate.send(topic, key, event);  // new, shadow`}</code>
      </pre>

      <p>
        Two important details: writes to Kafka were{" "}
        <strong>best-effort and async</strong> (failures logged but did not
        fail the request), and the key was <code>tenantId</code> from day
        one so we wouldn&apos;t have to repartition later.
      </p>

      <h3>Phase 2 — Shadow consumers</h3>

      <p>
        We deployed a parallel consumer reading from Kafka that did the
        same work as the RabbitMQ consumer but wrote results to a{" "}
        <code>_shadow</code> table instead of touching production data. A
        nightly job compared the two, surfaced diffs, and fed them into a
        dashboard.
      </p>

      <p>
        The first few weeks revealed exactly what you&apos;d expect:
      </p>

      <ul>
        <li>Off-by-one timestamps from a clock skew between brokers.</li>
        <li>
          A consumer that wasn&apos;t actually idempotent and double-applied
          a credit on retry.
        </li>
        <li>
          One producer that was publishing to RabbitMQ inside a transaction
          but to Kafka outside it — divergent on rollback.
        </li>
      </ul>

      <p>
        None of these would have been caught by tests. All of them would
        have been incidents on cutover.
      </p>

      <h3>Phase 3 — Cutover</h3>

      <p>
        Once the diff dashboard was clean for a sustained window, we
        flipped the primary consumer to Kafka per service. RabbitMQ
        consumers stayed running but became the shadow.
      </p>

      <p>
        Critically, the cutover was{" "}
        <strong>per-service, not per-system</strong>. We could roll back
        one consumer in minutes if anything looked off, and the broader
        migration kept moving.
      </p>

      <h3>Phase 4 — Drain &amp; delete</h3>

      <p>
        After a quarantine period with Kafka-as-primary, we stopped
        publishing to RabbitMQ, let the residual messages drain, and
        deleted the queues. The dual-write code came out behind a
        single-line deploy.
      </p>

      <h2>Consumer design choices</h2>

      <p>
        A few specific patterns that paid off:
      </p>

      <ul>
        <li>
          <strong>Idempotency at the handler level.</strong> Every consumer
          treated every message as &quot;might be delivered twice.&quot;
          We used <code>(eventId, tenantId)</code> as a dedup key in a small
          Redis set with a TTL.
        </li>
        <li>
          <strong>Partition-aware consumer groups.</strong> One consumer
          per partition per service, so within a tenant the order of events
          is preserved end-to-end.
        </li>
        <li>
          <strong>Manual commit after side effects.</strong> We commit
          offsets only after the downstream write succeeds. At-least-once
          processing + idempotent handlers is dramatically simpler than
          trying to bolt on exactly-once.
        </li>
      </ul>

      <h2>What I&apos;d do differently</h2>

      <p>
        Two things, in retrospect:
      </p>

      <ol>
        <li>
          <strong>Start with the schema registry from day one.</strong> We
          added Avro + a registry late and paid for it with breaking-change
          incidents during the dual-write phase. Cheap upfront, expensive
          to retrofit.
        </li>
        <li>
          <strong>Build the diff dashboard before the dual write, not
          after.</strong> We had two weeks of dual-write data we
          couldn&apos;t easily reason about because the tooling
          wasn&apos;t ready.
        </li>
      </ol>

      <h2>Takeaway</h2>

      <blockquote>
        Migrations don&apos;t fail at the cutover. They fail in the weeks
        you spend convincing yourself the new path is correct.
      </blockquote>

      <p>
        Spend the time on parity tooling. Shadow consumers and diff
        dashboards turn &quot;I hope this is fine&quot; into &quot;I can
        prove this is fine.&quot; That&apos;s how a multi-month migration
        ships without a single rollback.
      </p>
    </>
  );
}
