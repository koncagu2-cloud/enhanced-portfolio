import { defineConfig } from 'astro/config';

// A local review build. Production origin/base and hosting remain undecided.
export default defineConfig({ output: 'static', devToolbar: { enabled: false } });
