type DropChar<T extends string, U extends string> =
T extends `${infer prefix}${U}${infer suffix}`
? DropChar<`${prefix}${suffix}`, U>
: T

/**
 * 解题思路：
 * 抽出替换的字符串，递归调用即可
 */