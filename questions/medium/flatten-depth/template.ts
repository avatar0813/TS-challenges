type FlattenDepth<T extends any[], U extends number = 1, V extends any[] = []> =
  V['length'] extends U
  ? T
  : T extends [infer F, ...infer Rest]
  ? F extends any[]
  ? [...FlattenDepth<F, U, [...V, 1]>, ...FlattenDepth<Rest, U, V>]
  : [F, ...FlattenDepth<Rest, U, V>]
  : T

/**
 * 解题思路：
 * 
 * 判断 V.length 是否和 U 相等，默认U = 1
 * 第一次判断 V['length'] extends U 为 false (表示默认进行一次扁平化操作)
 * 进入后续判断
 * - 当F 为元组时，
 *  - 将F扁平化操作，传入U，以及 深度 + 1；其他成员递归，但深度不变
 * - 当F 不为元组时，
 *  - 则存储F，将其他成员扁平化操作，深度不变
 * 
 * 
 * 难点：
 *  每次递归的时候需要记录递归深度，需要一个数来存储，
 *  但是类型运算中不能加减，可以使用元组的['length']来记录
 */