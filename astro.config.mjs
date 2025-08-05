// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8547
  },
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
    server: {
      fs: {
        // Allow serving files from hoisted root node_modules
        allow: ['../..'],
      },
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
          // Set proper extensions for assets
          assetFileNames: (assetInfo) => {
            if (!assetInfo.names || assetInfo.names.length === 0) return `_astro/[name].[hash][extname]`;
            const fileName = assetInfo.names[0];
            const info = fileName.split('.');
            let extType = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img';
            } else if (/css/i.test(extType)) {
              extType = 'css';
            }
            return `_astro/[name].[hash][extname]`;
          }
        }
      },
      // Inline small CSS files to avoid MIME type issues
      cssCodeSplit: false,
      assetsInlineLimit: 0
    }
  },
  integrations: [
    tailwind(),
    react()
  ],
  trailingSlash: 'always',
  output: 'static'
});
