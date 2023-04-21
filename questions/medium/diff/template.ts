/**
 * 优解：
 * 通过 & 合并两个对象(此时第二个对象值类型优先)
 * 通过 | 取两个对象的相同索引对象
 * 通过keyof 取出 相同的索引
 * 使用Omit将对象中的相同的索引去掉
 */
type Diff<T extends Record<string, any>, U extends Record<string, any>> = Omit<T & U, keyof (T | U)>

type Foo = {
  name: string
  age: number
}

type Bar = {
  name: string
  age: string
  gender: number
}

// | 优先取前一个对象的值类型（即取Foo的值类型）
type TT =  Foo | Bar
const obj:TT = { 
  name: 'obj',
  age: 1
}
/**
 * 硬解：
 * 首先取key 判断key 是在T 或 U的lookup中
 * key 优先取 U中的索引
 * 
 * value同理，优先取U中的值
 */
// type Diff<T extends Record<string, any>, U extends Record<string, any>> = {
//   [
//     K in keyof T | keyof U 
//       as K extends keyof T 
//       ? K extends keyof U
//         ? never : K
//       : K
//   ]: K extends keyof U 
//     ? U[K]
//     : K extends keyof T 
//       ? T[K] 
//       : never
// }