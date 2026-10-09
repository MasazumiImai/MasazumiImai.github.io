import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://masazumiimai.github.io',
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
