type If<C extends boolean, T, F> = C extends true ? T : F

/**
 * 知识点
 * 
 * null在非严格模式下,
 * 类型兼容性
 * https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability
 */

type T1 = null extends boolean ?  'true' : 'false' // 在非严格模式下是true， 严格模式下是false
