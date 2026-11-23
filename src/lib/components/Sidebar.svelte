<script lang="ts">
  import { crates, docs, github, npm } from '#lib/site';
</script>

<aside class="sidebar">
  <section>
    <h2>Install</h2>
    <pre><code>cargo install litz-cli</code></pre>
    <pre><code>npm install @litz-sim/litz</code></pre>
  </section>

  <section>
    <h2>Links</h2>
    <dl>
      <dt>Repository</dt>
      <dd><a href={github}>Litz-Sim/litz</a></dd>
      <dt>Documentation</dt>
      <dd><a href={docs}>docs.litzsim.top</a></dd>
      <dt>crates.io</dt>
      <dd><a href={crates}>litz</a></dd>
      <dt>npm</dt>
      <dd><a href={npm}>@litz-sim/litz</a></dd>
      <dt>License</dt>
      <dd><a href={`${github}/blob/main/LICENSE`}>Apache-2.0</a></dd>
    </dl>
  </section>

  <section>
    <h2>Platforms</h2>
    <dl>
      <dt>Native</dt>
      <dd>Linux, macOS, Windows</dd>
      <dt>WebAssembly</dt>
      <dd>browser, Node</dd>
      <dt>Formats</dt>
      <dd>diagram.json, litz.toml</dd>
    </dl>
  </section>

  <section>
    <h2>Versions</h2>
    <dl>
      <dt>litz-cli</dt>
      <dd class="mono">0.1.1</dd>
      <dt>@litz-sim/litz</dt>
      <dd class="mono">0.2.1</dd>
      <dt>Crates</dt>
      <dd class="mono">0.1.x</dd>
    </dl>
  </section>
</aside>

<style>
  .sidebar {
    font-size: 13px;
  }

  section {
    padding: 14px 0;
    border-top: 1px solid var(--border);
  }

  section:first-child {
    border-top: 0;
    padding-top: 0;
  }

  h2 {
    margin: 0 0 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted);
  }

  pre {
    margin-bottom: 6px;
    padding: 8px 10px;
    font-size: 11.5px;
  }

  pre:last-child {
    margin-bottom: 0;
  }

  dl {
    margin: 0;
    display: grid;
    grid-template-columns: 104px 1fr;
    gap: 4px 10px;
  }

  dt {
    color: var(--muted);
  }

  dd {
    margin: 0;
    overflow-wrap: anywhere;
  }

  .mono {
    font-family: var(--mono);
    font-size: 12px;
  }
</style>