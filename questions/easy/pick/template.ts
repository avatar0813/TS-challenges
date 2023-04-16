type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

// 添加 K 的类型约束： K的类型(可能是union类型)必须extends T 的lookup 也就是说必须是 T的(keys)子集
// 然后就可以直接使用 in 遍历union类型