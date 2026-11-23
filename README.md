# Litz homepage

The landing page for [Litz](https://github.com/Litz-Sim/litz), built with SvelteKit and prerendered to static files for Cloudflare Pages.

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in build/
npm run check    # svelte-check
```

The documentation link lives in `src/lib/site.ts` and points at [docs.litzsim.top](https://docs.litzsim.top/). Docsify routes by hash, so a page is `https://docs.litzsim.top/#/rust`; `docPage()` builds those links.

Cloudflare Pages: build command `npm run build`, output directory `build`.

`typescript` is pinned to 6 because `svelte-check` 4.7 peers on `^5 || ^6`; TypeScript 7 is rejected by npm's resolver. Drop the pin when svelte-check accepts 7.
