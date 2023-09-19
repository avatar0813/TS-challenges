type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never
  ? T[P]
  : DeepReadonly<T[P]>
}
/**
 * keyof T[P] extends never
 * 表示keyof T[P] 不能继续被拆分， never表示不会存在的类型
 * keyof T[P] extends never ? true : false 为 true 时，也就表示T[P]是 undefined | null
 */
type testNever = never extends never ? true : false // true
type testn = keyof (undefined | null) extends never ? true : false // true

/**
 * keyof string
 * 会返回带有 number 以及string原型对象上所有属性的联合类型
 * 带有number是对象类型中有类数组对象的场景
 */
type keyStr = keyof string // number | "toString" | "charAt"  | ...

type testStr = keyof string extends string | number ? true : false // true  包含number的类数组场景
