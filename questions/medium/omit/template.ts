// 方法一
// 使用 as 类型断言 指定 P的类型  如果属于K中的类型元素， 则为never
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}


// 方法二
// 使用Exclude 排除 K中的联合类型
// https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
// type MyOmit<T, K extends keyof T> = {
//   [k in Exclude<keyof T, K>]: T[k]
// }