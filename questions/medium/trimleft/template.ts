type TrimLeft<S extends string> = S extends `${' ' | '\t' | '\n'}${infer U}` ? TrimLeft<U> : S


// 知识点
// 前面有空字符 或制表符 或换行 可以添加联合类型 做类型限制