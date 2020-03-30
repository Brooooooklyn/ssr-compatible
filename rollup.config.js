import { readdirSync, statSync } from 'fs'
import { join } from 'path'
import sourcemaps from 'rollup-plugin-sourcemaps'

const pkgs = readdirSync(join(__dirname, 'packages')).filter(
  (dir) =>
    statSync(join(__dirname, 'packages', dir)).isDirectory() &&
    !require(join(__dirname, 'packages', dir, 'package.json')).private,
)

export default pkgs.map((dir) => ({
  input: `./packages/${dir}/esm/index.js`,
  external: ['ssr-compatible-transformer'],
  plugins: [sourcemaps()],
  output: [
    {
      file: `./packages/${dir}/dist/index.cjs.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: `./packages/${dir}/dist/index.esm.js`,
      format: 'esm',
      sourcemap: true,
    },
  ],
}))
