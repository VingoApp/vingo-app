import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
        template: {
            transformAssetUrls: {
                includeAbsolute: false,
            },
        },
    }),
    legacy(),
    VitePWA({
        includeAssets: ["favicon.png", "public/*"],
        registerType: 'autoUpdate',
/*         devOptions: {
            enabled: true
        }, */
        injectRegister: 'script',
        workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg}']
        },
        manifest: {
            "name": "Vingo",
            "short_name": "Vingo",
            "description": "Vingo est une application de resell Vinted qui propose de nombreux outils.",
            "start_url": "/",
            "display": "standalone",
            "scope": "/",
            "id": "vingo",
            "orientation": "portrait",
            "background_color": "#10BEC8",
            "theme_color": "#10BEC8",
            "icons": [
                {
                "src": "icons/icon_48x48.png",
                "sizes": "48x48",
                "type": "image/png"
                },
                {
                "src": "icons/icon_72x72.png",
                "sizes": "72x72",
                "type": "image/png"
                },
                {
                "src": "icons/icon_96x96.png",
                "sizes": "96x96",
                "type": "image/png"
                },
                {
                "src": "icons/icon_144x144.png",
                "sizes": "144x144",
                "type": "image/png"
                },
                {
                "src": "icons/icon_192x192.png",
                "sizes": "192x192",
                "type": "image/png"
                },
                {
                "src": "icons/icon_512x512.png",
                "sizes": "512x512",
                "type": "image/png"
                },
                {
                "src": "icons/icon_512x512.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "maskable"
                }
            ]
        }

    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
