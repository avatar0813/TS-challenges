type MyCapitalize<S extends string> = S extends `${infer T}${infer U}` ? `${Uppercase<T>}${U}` : S


// 知识点  字面量类型方法: Uppercase 
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype