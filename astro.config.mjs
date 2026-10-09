import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://masazumiimai.github.io',
  integrations: [
    sitemap({
      filter: (page) => !['/404', '/404/', '/404.html', '/robots.txt'].includes(new URL(page).pathname),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ja: 'ja' },
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-ibm-plex-mono',
      weights: [500],
      styles: ['normal'],
      fallbacks: ['monospace'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      fallbacks: [
        'Hiragino Sans',
        'Hiragino Kaku Gothic ProN',
        'Noto Sans JP',
        'Yu Gothic',
        'Meiryo',
        'sans-serif',
      ],
    },
  ],
});
