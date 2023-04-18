/**
 * 优解
 * 没想到可以在联合类型中 两个类型元素中 infer 两个相同的类型
 */
type space = ' ' | '\t' | '\n'
type Trim<S extends string> = S extends `${space}${infer T}` | `${infer T}${space}` ? Trim<T> : S


// 硬解
// type Trim<S extends string> = S extends `${' ' | '\t' | '\n'}${infer T}` 
// ? T extends `${infer U}${' ' | '\t' | '\n'}` 
//   ? Trim<U>
//   : Trim<T> 
// : S extends `${infer U}${' ' | '\t' | '\n'}` 
//   ? Trim<U>
//   : S


