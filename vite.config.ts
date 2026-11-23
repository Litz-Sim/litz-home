import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // SvelteKit 3 takes its configuration here rather than from svelte.config.js.
    sveltekit({
      // One prerendered page plus static assets; there is no server.
      adapter: adapter({ precompress: true }),
      prerender: {
        // /docs/ is the docsify site, deployed beside this one. The crawler
        // cannot see it at build time, so a link into it is not a broken page.
        handleHttpError: ({ path, message }) => {
          if (path.startsWith('/docs/')) return 'ignore';
          throw new Error(message);
        }
      }
    })
  ]
});