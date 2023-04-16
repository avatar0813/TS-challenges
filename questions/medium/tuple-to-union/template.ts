type TupleToUnion<T extends any[]> = T extends Array<infer ITEMS> ? ITEMS : never


/**
 * 知识点
 * 怎么创建一个union类型
 * 利用 tuple 和 数组 extends Array
 * 同时 typeof tuple['length'] 是元素个数， typeof 数组\union['length] 是 number
 */

type tp = [string, string, number]
const arr:any[] = [1,2,3]
type arrT = typeof arr

type test1 = tp extends Array<any> ? true : false // true
type t2 = tp extends any[] ? true : false // true
type t3 = arrT extends Array<any> ? true : false // true
type t4 = arrT extends any[] ? true : false // true

type t5 = typeof arr['length'] // number
type t6 = ('a' | 'b' | 'c')['length'] // number
type t7 = tp['length'] // 3