type IsTuple<T> = [T] extends [never]
? false
: T extends readonly any[] 
  ? number extends T['length']
    ? false
    : true
  : false


/**
 * 解题思路：
 * 首先判断 是否是个数组  T extends readonly any[] 
 *    这里添加时readonly cases 中有readonly 的case  实际的元素添加readonly判断也没有关系
 * 如果 number extends T['length'] 成立 则认为传入的是一个数组，而不是一个元组
 * 因为元组的['length'] 是一个数值
 * 
 * 知识点：
 * 元组是一个具有固定长度的数组
 * 元组的['length] 是一个固定的number数值
 * 数组类型的['length'] 是一个number类型(不确定长度)
 */

type isTupleTest1 = ['1', 1]
type isTupleTest2 = any[]

type isTupleRes1 = isTupleTest1['length'] // 2
type isTupleRes2 = isTupleTest2['length'] // number
