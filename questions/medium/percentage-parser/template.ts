type CheckPrefix<T> = T extends '+' | '-' ? T : never
type CheckSuffix<T> = T extends `${infer P}%` ? [P, '%'] : [T, '']

type PercentageParser<A extends string> =
  A extends `${CheckPrefix<infer L>}${infer R}`
  ? [L, ...CheckSuffix<R>]
  : ['', ...CheckSuffix<A>];

/**
 * 解题思路：
 * 分为两部分
 * - 检查前缀 是否带符号
 * - 拆解数字和%部分
 * 
 * 核心
 * 怎么理解 CheckPrefix<infer L> 中是将L传进去，还是说是CheckPrefix高级类型返回的L
 * 
 * 表示 从 A中 拆分的L 能满足 checkPrefix的类型推断，可以直接将L套入checkPrefix的表达式
 */