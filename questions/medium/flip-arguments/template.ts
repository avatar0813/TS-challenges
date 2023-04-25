type ReverseFlip<T extends any[]> = T extends [infer R, ...infer Rest] ? [...ReverseFlip<Rest>, R] : T

type FlipArguments<T extends (...args: any[]) => any> =
T extends (...args: infer A) => infer Y
? (...args: ReverseFlip<A>) => Y
: T


/**
 * 解题思路：
 * 将参数反转，使用Reverse一样的逻辑就行
 * 
 * 知识点：
 * 函数参数做类型推断 需要放在：之后, 其实也就是每个申明类型的地方
 */