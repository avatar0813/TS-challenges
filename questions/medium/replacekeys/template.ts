type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: 
    K extends T
    ? K extends keyof Y
      ? Y[K]
      : never
    : U[K]
}

/**
 * 解题思路：
 * 取出联合之后的对象类型的key，
 * 判断是否在要replace的keys中
 *    是的话就判断是否在替replace对象类型是是否有相同的key
 *        有则取replace的类型 否则置为never
 *    不是则返回原有类型
 * 
 * 知识点： 
 * 对象类型的联合类型 实际上会返回合并之后的对象类型, 更应该看作是进行了 | 运算
 */

type replacekeysTest = { a: string } | { b: number }
const instance: replacekeysTest = { a:'instance', b: 1}
// js
// function replacekeys(list = [], keys = [], target) {
//   list.forEach(item => {
//     keys.forEach(key => {
//       if (key in item) {
//         item[key] = target[key]
//       }
//     })
//   })
// }

