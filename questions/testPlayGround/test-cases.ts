import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnionTest<''>, never>>,
  Expect<Equal<StringToUnionTest<'t'>, 't'>>,
  Expect<Equal<StringToUnionTest<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnionTest<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]
