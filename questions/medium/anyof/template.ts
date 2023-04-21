type AnyOf<T extends readonly any[]> = 
T[number] extends 0 | '' | undefined | null | false | [] | { [key: string]: never } ? false : true

/**
 * 解题思路：
 * 穷举法
 * 
 * T[number] extends 类似在遍历数组判断
 */