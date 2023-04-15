import type { Equal } from '@type-challenges/utils'


export type Includes<T extends any [], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false

// js 实现includes

// funcito IncludesFn(list, key) {
//   // 是否包含
//   function _(list, key) {
//     if (list.length === 0) return false
//     const [first, ...rest] = list
//     if (first === key) {
//       return true
//     } else {
//       return _(rest, key)
//     }
//   }

//   return _(list, key)

// }