import { transformer } from 'ssr-compatible-transformer'
import type { loader } from 'webpack'

export default function (this: loader.LoaderContext, content: string | Buffer) {
  return transformer(content)
}
