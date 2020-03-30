import { Configuration } from 'webpack'
import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const basicConfig: Configuration = {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.ts/,
        use: 'ts-loader',
      },
      {
        test: /\.ogg/,
        use: 'file-loader',
      },
      {
        use: 'ssr-compatible-loader',
        include: [/node_modules[\\/](wavesurfer\.js)[\\/]/],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },
}

export default ([
  {
    entry: join(__dirname, 'packages', 'demo', 'src', 'index.ts'),
    target: 'web',
    output: {
      filename: 'app.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: join(__dirname, 'index.html'),
      }),
    ],
  },
  {
    entry: join(__dirname, 'packages', 'demo', 'src', 'worker.ts'),
    target: 'webworker',
    output: {
      filename: 'worker.js',
    },
  },
] as Configuration[]).map((config) => ({ ...basicConfig, ...config }))
