import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'
  
  return {
    plugins: [
      qwikVite({
        // Mode CSR seulement pour éviter les problèmes SSR
        csr: true,
        // Désactiver complètement l'optimiseur pour le build de lib
        ...(isLib && { client: { devInput: false } })
      }),
    ],
    ...(isLib && {
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'QwikSlick',
          fileName: 'index',
          formats: ['es', 'cjs']
        },
        rollupOptions: {
          external: ['@builder.io/qwik'],
          output: {
            globals: {
              '@builder.io/qwik': 'Qwik'
            }
          }
        },
        // Éviter la génération de chunks de preloader
        modulePreload: false,
        manifest: false
      }
    })
  }
})
