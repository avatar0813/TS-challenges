type LengthOfString<S extends string, T extends any[] = []> =
S extends `${infer F}${infer R}`
? LengthOfString<R, [...T, F]>
: T['length']

/**
 * 字符串长度 - 解题思路
 * 多定义一个元组用以存储
 * - 拆分 字符串，第一个塞入存储的元组中，后续的字符串递归调用
 * - 返回存储的元组长度
 */