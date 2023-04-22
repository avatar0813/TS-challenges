type IsUnion<T, B = T> = [T] extends [never] 
? false
: T extends B 
  ? [B] extends [T] 
    ? false : true 
  : false

/**
 * 解题思路：
 * cases 中 联合类型实际只有一个类型的的case 需要返回no-union
 * - 首先判断为 never 的场景
 * - 然后 union 类型开始使用 extends 判断
 *   T extends B 之后 的 [B] extends [T] 中的 第二个 [T] 其实已经是分发后的原union类型的单个元素类型
 *   所以 如果说 [B] extends [T] 还是成立的， 说明原本 T 就是一个单一类型 非union类型
 * 
 * 知识点
 * union类型 extends 会分发
 * union类型 会取大范围类型
 * 判断是否为union类型 就是将类型分发之后再判断单一元素类型与原类型是否一样
 */

type isUnionTest1 = 'a' | 1 | {age: 1}
// | 会取大范围类型
type isUnionTest2 = string | never // string
type isUnionTest3 = string | unknown // unknown
type isUnionTest4 = string | any // any
type isUnionTest5 = string | 'a' // string
