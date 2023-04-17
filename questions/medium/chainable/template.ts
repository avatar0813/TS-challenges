type Chainable<T extends Record<string, any> = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<T & Record<K, V>> 
  get(): T
}


/**
 * 属性类型为函数, 先<指定泛型类型>
 * 取K：在参数中指定参数类型限制( K extends keyof T ? never : K )
 * 赋值: 对象赋值的过程， 即为 {} & {K, V} 递归传递给Chainable中的T
 */