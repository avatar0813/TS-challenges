type Zip<T extends any[], U extends any[]> =
T extends [infer TL, ...infer TR]
? U extends [infer UL, ...infer UR]
  ? [[TL, UL], ...Zip<TR, UR>]
  : []
: []

/**
 * 解题思路：
 * 取两个数组的第一个组成一个新的数组
 * 其余部分递归生成
 */