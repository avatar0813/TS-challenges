type IsNever<T> = [T] extends [never] ? true : false

// 不能直接判断一个类型是never  但是可以使用[T] extends [never] 可以判断

// 假如 isNever 是写成 T extends never
// 为什么类型 aa 是 never
// 而类型 bb 是 true
type IsNever2<T> = T extends never ? true : false
type aa = IsNever2<never> // never
type bb = never extends never ? true : false // true