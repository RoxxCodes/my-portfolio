export function Post3() {
  return (
    <>
      <p>
        A tenant-facing API was taking 40 seconds to respond. Customers
        were complaining. Our load balancer was timing out. The endpoint
        was a simple list query — &quot;give me this tenant&apos;s items,
        most recent first.&quot; The fix took one DDL statement. The lesson
        took a few hours of reading <code>EXPLAIN</code> output.
      </p>

      <p>This is the debugging story.</p>

      <h2>The setup</h2>

      <p>
        The table looked roughly like this — millions of rows, hundreds of
        tenants:
      </p>

      <pre>
        <code>{`CREATE TABLE items (
    id          BIGINT PRIMARY KEY,
    tenant_id   BIGINT NOT NULL,
    created_at  DATETIME NOT NULL,
    -- ... 20 other columns
    INDEX idx_items_created_tenant (created_at, tenant_id)
);`}</code>
      </pre>

      <p>The query was equally innocent:</p>

      <pre>
        <code>{`SELECT * FROM items
WHERE tenant_id = ?
ORDER BY created_at DESC
LIMIT 50;`}</code>
      </pre>

      <p>
        An index existed. The columns matched. The ORM was generating
        clean SQL. So why was it scanning the whole table?
      </p>

      <h2>EXPLAIN tells the truth</h2>

      <pre>
        <code>{`EXPLAIN SELECT * FROM items
WHERE tenant_id = 42
ORDER BY created_at DESC
LIMIT 50;

+----+-------------+-------+-------+---------------+
| id | select_type | table | type  | rows          |
+----+-------------+-------+-------+---------------+
| 1  | SIMPLE      | items | ALL   | 8,412,901     |
+----+-------------+-------+-------+---------------+`}</code>
      </pre>

      <p>
        <code>type: ALL</code>. The optimizer wasn&apos;t using the index
        at all. It was scanning every row, filtering by
        <code> tenant_id</code>, and then sorting in memory. On a table
        with millions of rows. For every request.
      </p>

      <h2>Why the existing index didn&apos;t help</h2>

      <p>
        Index column order matters more than most people think. The
        existing index was{" "}
        <code>(created_at, tenant_id)</code>. To use this index for our
        query, MySQL would have to:
      </p>

      <ol>
        <li>
          Walk the index in <code>created_at</code> order.
        </li>
        <li>
          Filter to rows where <code>tenant_id = ?</code>.
        </li>
        <li>Stop after 50 matches.</li>
      </ol>

      <p>
        That sounds reasonable until you think about the data
        distribution. For an average tenant, matches are sparse. The
        optimizer estimated it would walk a huge chunk of the index before
        accumulating 50 hits for our tenant, and decided a full table scan
        was cheaper. It wasn&apos;t wrong — given the index it had.
      </p>

      <h2>The fix: flip the column order</h2>

      <pre>
        <code>{`CREATE INDEX idx_items_tenant_created
    ON items (tenant_id, created_at DESC);

DROP INDEX idx_items_created_tenant ON items;`}</code>
      </pre>

      <p>Now the same query can:</p>

      <ol>
        <li>
          Jump directly to the slice of the index where{" "}
          <code>tenant_id = ?</code>.
        </li>
        <li>
          Walk that slice in <code>created_at DESC</code> order, which is
          how it&apos;s physically stored.
        </li>
        <li>Return the first 50 rows. Done.</li>
      </ol>

      <p>
        Re-running <code>EXPLAIN</code>:
      </p>

      <pre>
        <code>{`+----+-------------+-------+-------+---------------+
| id | select_type | table | type  | rows          |
+----+-------------+-------+-------+---------------+
| 1  | SIMPLE      | items | range | 50            |
+----+-------------+-------+-------+---------------+`}</code>
      </pre>

      <p>
        Response time dropped from 40 seconds to ~2 seconds — the
        remaining time was almost entirely the network and serialization
        of 50 fat rows.
      </p>

      <h2>The rule of thumb</h2>

      <blockquote>
        For composite indexes: equality columns first, then range/sort
        columns. The index has to start where your filter is exact, then
        let the ordering fall out naturally.
      </blockquote>

      <p>
        Equivalently:{" "}
        <code>WHERE eq_col = ? AND range_col &gt; ? ORDER BY sort_col</code>{" "}
        wants an index on <code>(eq_col, range_col, sort_col)</code> — in
        that order.
      </p>

      <h2>What I&apos;d add to the team&apos;s playbook</h2>

      <ul>
        <li>
          <strong>EXPLAIN every new query.</strong> Not just the slow
          ones. The cheap query today is the regression in six months.
        </li>
        <li>
          <strong>Look at <code>type</code> and <code>rows</code>, not
          just <code>key</code>.</strong> An index being &quot;chosen&quot;
          doesn&apos;t mean it&apos;s being used well.
        </li>
        <li>
          <strong>Match index order to the query, not vice versa.</strong>{" "}
          ORMs hide the SQL; they don&apos;t hide the storage engine.
        </li>
      </ul>

      <p>
        A 38-second win for a 30-second DDL is the best ROI any of us are
        going to get this quarter.
      </p>
    </>
  );
}
