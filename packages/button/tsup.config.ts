import { defineConfig } from 'tsup'
import { solidPlugin } from 'esbuild-plugin-solid'

export default defineConfig({
  clean: true,
  entry: ['src/index.tsx'],
  sourcemap: true,
  bundle: true,
  format: ['esm'],
  dts: true,
  esbuildPlugins: [solidPlugin()],
})
