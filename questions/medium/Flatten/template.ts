type Flatten<T extends any[]> =
  T extends [infer F, ...infer Rest]
  ? F extends any[]
  ? [...Flatten<F>, ...Flatten<Rest>]
  : [F, ...Flatten<Rest>]
  : T


/**
 * 解题思路：
 * - 判断参数是否为元组类型
 * - 判断第一个类型元素是否是元组
 * - 是 将第一个类型元素与后续元素解构递归
 * - 否 只将第二个类型元素结构递归
 * 
 * 直到参数不为元组，返回存储的值
 */