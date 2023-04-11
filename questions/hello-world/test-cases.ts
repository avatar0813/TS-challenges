import type { Equal, Expect, NotAny } from '@type-challenges/utils'

// 如果类型失败会报错
type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
