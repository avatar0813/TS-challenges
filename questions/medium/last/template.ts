// 普通方法
// type Last<T extends any[]> = T extends [...infer Rest, infer L] ? L : never


// 高级方法
type Last<T extends any[]> = [any, ...T][T['length']]