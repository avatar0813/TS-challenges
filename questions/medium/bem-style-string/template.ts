type IsNeverString<T> = [T] extends [never] ? true : false
type IsUnionString<T> = IsNeverString<T> extends true ? '' : T

type BEM<B extends string, E extends string[], M extends string[]> =
`${B}${IsUnionString<`__${E[number]}`>}${IsUnionString<`--${M[number]}`>}`

/**
 * 解题思路：
 * 利用数组[number] 返回union类型
 * 以及联合类型分发机制
 * 
 * 知识点：
 * 数组类型作为泛型 T[number] 得到union
 * 对象类型作为泛型 T[keyof T] 得到union
 */