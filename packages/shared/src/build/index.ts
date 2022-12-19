// SOLID Build Configure
import { defineConfig } from 'tsup'
import { solidPlugin } from 'esbuild-plugin-solid'
import cssModulePlugin from './moduleCSSPlugin'

interface Props {
  cssModule: boolean
}

export const getBuildConfig = (
  {
    cssModule = false,
  }: Props,
) => {
  const plugins = [
    solidPlugin(),
  ]

  if (cssModule)
    plugins.push(cssModulePlugin())

  return defineConfig({
    clean: true,
    entry: ['src/index.tsx'],
    sourcemap: true,
    bundle: true,
    format: ['esm'],
    dts: true,
    esbuildPlugins: plugins,
  })
}
