<script lang="ts">
  import { docs, github } from '#lib/site';
</script>

<header class="nav">
  <div class="wrap inner">
    <a class="brand" href="#top" aria-label="Litz home">
      <svg width="20" height="20" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <rect x="4.5" y="4.5" width="17" height="17" rx="3.5" stroke="currentColor" stroke-width="1.6" />
        <path d="M9 1.5v3M13 1.5v3M17 1.5v3M9 21.5v3M13 21.5v3M17 21.5v3M1.5 9h3M1.5 13h3M1.5 17h3M21.5 9h3M21.5 13h3M21.5 17h3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        <circle cx="13" cy="13" r="2.4" fill="var(--green)" />
      </svg>
      <span>Litz</span>
    </a>

    <nav class="links" aria-label="Main">
      <a href={docs}>Docs</a>
      <a href="#examples">Examples</a>
      <a href="#chips">Chips</a>
      <a href="#start">Install</a>
    </nav>

    <div class="right">
      <span class="version mono">v0.2.1</span>
      <a href={github}>GitHub</a>
    </div>
  </div>
</header>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }

  .inner {
    display: flex;
    align-items: center;
    gap: 24px;
    height: 52px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--text);
    font-size: 16px;
    font-weight: 600;
  }

  .brand:hover {
    text-decoration: none;
  }

  .links {
    display: flex;
    gap: 18px;
    font-size: 13.5px;
  }

  .links a {
    color: var(--muted);
  }

  .links a:hover {
    color: var(--text);
    text-decoration: none;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-left: auto;
    font-size: 13px;
  }

  .version {
    color: var(--muted);
    font-size: 12px;
    border: 1px solid var(--border);
    padding: 1px 6px;
  }

  @media (max-width: 720px) {
    .links {
      display: none;
    }
  }
</style>