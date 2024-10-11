import pluginTypeScript from '@babel/preset-typescript'
import { babel } from '@rollup/plugin-babel'

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: 'src/index.ts',
  preserveEntrySignatures: 'strict',
  treeshake: {
    propertyReadSideEffects: false,
  },
  output: {
    file: 'dist/dist/index.js',
    format: 'es',
    freeze: false,
    generatedCode: {
      constBindings: true,
      objectShorthand: true,
    },
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: [pluginTypeScript],
    }),
  ],
}

export default options
