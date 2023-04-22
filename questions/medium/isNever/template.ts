type IsNever<T> = [T] extends [never] ? true : false

// 不能直接判断一个类型是never  但是可以使用[T] extends [never] 可以判断

// 假如 isNever 是写成 T extends never
// 为什么类型 aa 是 never
// 而类型 bb 是 true

type IsNever2<T> = T extends never ? true : false
type aa = IsNever2<never> // never
type bb = never extends never ? true : false // true

/**
 * 解答： 
 * never 特殊的联合类型 表示没有任何成员， 当他被用作泛型时，会分发，当传入类型函数IsNever中时，分发没有执行任何操作，返回的就是never了
 * 
 * 参考：
 * https://juejin.cn/post/7069693936805085191
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 */