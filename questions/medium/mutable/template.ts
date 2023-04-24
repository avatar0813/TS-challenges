type Mutable<T extends Record<string, any>> = {
  -readonly [K in keyof T]
    : T[K] extends Record<string, any> 
      ? Mutable<T[K]> 
      : T[K]
}


/**
 * 解题思路：
 * - 定义参数类型，
 * - 如果值为对象则继续递归
 */