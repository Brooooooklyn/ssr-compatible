const HEAD = `if(typeof window !== 'undefined'){\n`
const TAIL = '\n}'

export const transformer = (content: string | Buffer) => {
  if (Buffer.isBuffer(content)) {
    return Buffer.concat([Buffer.from(HEAD), content, Buffer.from(TAIL)])
  } else if (typeof content === 'string') {
    return HEAD + content + TAIL
  }
  throw new TypeError(`Unsupport content type: ${typeof content}`)
}
