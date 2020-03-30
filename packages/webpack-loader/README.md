# `ssr-compatible-loader`

## Usage

```ts
export default {
  module: {
    rules: [
      {
        use: 'ssr-compatible-loader',
        include: [/node_modules[\\/](wavesurfer\.js|some\-other\-libraries)[\\/]/],
      },
    ]
  }
}
```
