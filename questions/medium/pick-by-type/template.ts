type PickByType<T, U> = {
  [
    key in keyof T as T[key] extends U 
    ? key 
    : never
  ]: T[key]
}

/**
 * 解题思路：
 * 将key 重映射 判断类型值是否是规定类型
 * - 是则返回保留key， 否之key 为 never
 */