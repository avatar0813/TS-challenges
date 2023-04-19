type AppendToObject<T extends Record<string, any>, K extends string, V extends any> = {
  [key in keyof T | K]: key extends keyof T ? T[key] : V
}

/**
 * 解题思路：
 * 返回类型中的 key 需要是在T的lookup和 K中，
 * 判断key是否属于原对象中，是则取原对象的值，否则取新值
 */