type OmitByType<T extends Record<string, any>, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K]
}

/**
 * 解题思路： 
 * 只需遍历对象中的key并通过重映射找到值类型，将匹配的项置为never就行了
 */