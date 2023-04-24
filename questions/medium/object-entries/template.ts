type ObjectEntries<T extends Record<string, any>, U = Required<T>> = {
  [K in keyof U]: [K, U[K] extends never ? undefined : U[K]]
}[keyof U]

/**
 * 解题思路：
 * 遍历 Required之后的索引，利用索引类型[union]返回所有value的union的特性，
 * 将结果返回
 * 
 * 知识点：
 * - readonly的值映射取值的话为: never
 * - Required 可以将一个索引类型转变为一个相同的索引类型，不过每个索引都是 mutable
 * - 一个索引类型的取值如果是一个union，返回的是union中每个成员对应的索引类型的值类型的union
 *   如下例子：
 */


interface Model {
  name: string
  age: number
  locations: string[] | null
}
type Model2 = {
  name: string
  age: number
  locations: string[] | null
}

type testEntries1 = Model['name' | 'age'] // string | number
type testEntries2 = Model2['name' | 'age'] // string | number