type AppendArgument<F extends (...args: any[]) => any, T> =
F extends (...args: infer A) => infer R
? (...args: [...A, T]) => R
: never 

/**
 * 考察点： 
 * - 参数类型的限制， 限制第一个参数为函数类型 需要先做类型限制
 * - (...args: infer A) 原有类型的提取
 * - (...args: [...A, T]) 新参数类型的拼接
 */