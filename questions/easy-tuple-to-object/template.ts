// tupleToObject 元组 转 对象
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K
}


// js 翻译
const tuple = ['a', 'b', 'c']

const target = {}
tuple.forEach(key=>{
  target[key] = key
})

/**
 * js 思想
 * 遍历数组，将每个key 作为 新对象的key 和 value
 * 
 * 
 * [K in T[number]]  可以遍历数组
 * [K in keyof T], keyof 一个数组， 只能得到他的索引的数组，如[0, 1, 2, 3]
 * 
 * ! 记住控制key的类型  添加类型约束(string | number | symbol)
 */
