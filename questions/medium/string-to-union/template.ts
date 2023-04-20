type StringToUnion<T extends string> = T extends `${infer L}${infer R}`
? L | StringToUnion<R> 
: never

/**
 * 解题思路
 * 怎么将每个字符转成union类型
 * 将第一个推断的元素类型 | 与后续字符串调用自身函数递归
 * 
 * 注：联合类型 中有never 会被忽略
 */

type T = 'a' | 'b' | never | 'c' // 'a' | 'b' | 'c'