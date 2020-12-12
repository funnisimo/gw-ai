
// GW-TEXT: rollup.config.js

import { terser } from "rollup-plugin-terser";

export default [
{
  input: 'js/gw.js',
  output: {
    file: 'dist/gw-ai.min.js',
    format: 'umd',
    name: 'GW',
    freeze: false,
    extend: true,
    sourcemap: true,
    plugins: [terser()]
  }
},
{
  input: 'js/index.js',
  output: {
    file: 'dist/gw-ai.js',
    format: 'cjs',
    freeze: false,
  }
},

];