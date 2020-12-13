
// GW-AI: rollup.config.js

import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "./js/types/index.d.ts",
    output: [{ file: "dist/gw-ai.d.ts", format: "es" }],
    plugins: [dts()],
  },
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