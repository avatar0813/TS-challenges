type Flatten<T extends any[], P extends any[] = []> =
T extends [infer F, ...infer Rest]
? F extends any[]
  ? Flatten<[...F, ...Rest], P>
  : Flatten<[...Rest], [...P, F]>
: P


/**
 * 解题思路：
 * - 声明第二个参数作为元组存储结果
 * - 判断参数是否为元组类型
 * - 判断第一个类型元素是否是元组
 * - 是 将第一个类型元素与后续元素解构递归
 * - 否 将第一个类型元素 传入第二个参数作为结果递归
 * 
 * 直到参数不为元组，返回存储的值
 */