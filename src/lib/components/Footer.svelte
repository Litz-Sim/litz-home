<script lang="ts">
  import { crates, docs, github, npm } from '#lib/site';
</script>

<footer class="footer">
  <div class="wrap inner">
    <span>Litz is Apache-2.0 licensed.</span>
    <nav>
      <a href={docs}>Documentation</a>
      <a href={github}>GitHub</a>
      <a href={crates}>crates.io</a>
      <a href={npm}>npm</a>
    </nav>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--border);
    margin-top: 24px;
    padding: 16px 0 28px;
    font-size: 12.5px;
    color: var(--muted);
  }

  .inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  nav a {
    color: var(--muted);
  }

  nav a:hover {
    color: var(--text);
  }
</style>