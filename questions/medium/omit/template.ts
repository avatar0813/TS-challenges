// 方法一
// 使用 as
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}


// 方法二
// 使用Exclude 排除 K中的联合类型
// https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
// type MyOmit<T, K extends keyof T> = {
//   [k in Exclude<keyof T, K>]: T[k]
// }