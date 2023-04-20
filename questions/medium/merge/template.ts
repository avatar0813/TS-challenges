type Merge<T extends Record<string, any>, U extends Record<string, any>> = {
  [K in keyof T | keyof U]: K extends keyof U
  ? U[K]
  : K extends keyof T
    ? T[K]
    : never
}


/**
 * 解题思路
 * 第二个对象 key类型优先
 * 先判断是否属于第二个对象的lookup
 *  - 是 直接取第二个对象的属性类型
 *  - 否 判断是否属于第一个对象的lookup
 *    - 是 取第一个对象的属性类型
 *    - 否 返回 never
 */