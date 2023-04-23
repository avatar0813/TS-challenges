type IntersectionToObj<T> = {
  [K in keyof T]: T[K]
}

type PartialByKeys<T extends Record<string, any>, K extends keyof T = keyof T> = IntersectionToObj<{
  [
    key in keyof T
      as key extends K
      ? never
      : key
  ]: T[key]
} & {
  [
    key in keyof T
      as key extends K
      ? key
      : never
  ]?: T[key] | undefined
}>


/**
 * 解题思路：
 * 将原有对象中保留的key遍历生成一个unPartial的对象
 * 将原有对象中需要partial的key遍历生成一个Partial的对象
 * 将两个对象相交 &
 * 
 * 问题点：
 * 怎么判断第二个参数union都是在第一个对象当中？
 *  extends keyof T
 * 怎么不传第二个参数？
 *  使第二个参数默认值为第一个参数的所有key，返回的到的对象就是将原有对象所有值都变成partial
 */