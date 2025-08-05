import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'
  
  return {
    plugins: [
      qwikVite({
        csr: true,
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
        }
      }
    })
  }
})
