import { build } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

// Build manuel sans preloader
const buildConfig = {
  build: {
    lib: {
      entry: resolve(process.cwd(), 'src/index.ts'),
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
    // Pas de preloader
    modulePreload: false,
    manifest: false,
    outDir: 'dist-manual'
  },
  plugins: []
}

try {
  await build(buildConfig)
  
  // Copier les fichiers CSS
  if (fs.existsSync('src/lib/QwikSlick.css')) {
    fs.copyFileSync('src/lib/QwikSlick.css', 'dist-manual/index.css')
  }
  
  console.log('Build manuel terminé sans preloader!')
} catch (error) {
  console.error('Erreur lors du build:', error)
}
