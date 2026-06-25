// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://engineering-blog.contact-lpietro.workers.dev/',
  integrations: [mdx(), partytown(), sitemap()],
  adapter: cloudflare()
});