type TupleToNestedObject<T extends any[], U, Res extends Record<string, any> = {}> = 
T extends [infer L, ...infer Rest]
?  {
  [K in L & string]: TupleToNestedObject<Rest, U>
}
: U

/**
 * 解题思路：
 * 取出元组第一个成员，将第一个元组作为key， 剩下的继续递归调用
 * 
 * 知识点：
 * 如何将一个推断出来的类型作为key呢？
 * 将k in L，遍历L， 
 * 且约束类型， L & string,  只取L中string的成员
 */