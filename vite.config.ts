import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cpSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

export default defineConfig({
  build: { copyPublicDir: false },
  plugins: [react(), tailwindcss(), {
    name: 'copy-production-public-assets',
    writeBundle(options) {
      const output = resolve(options.dir ?? 'dist')
      for (const entry of readdirSync('public', { withFileTypes: true })) {
        if (entry.name !== 'references') {
          cpSync(resolve('public', entry.name), resolve(output, entry.name), { recursive: true })
        }
      }
    },
  }],
})
