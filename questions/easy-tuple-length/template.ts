type Length<T extends readonly any[]> = T['length']


// js 处理

const Length = (arr) => {
  if (!Array.isArray(arr)) return;
  return arr.length
}

/**
 * 知识点
 * 数组type 的 length 得到的是number
 * tuple 的 length 得到的是 具体元素个数
 */

type ArrayType = string[]
type ArrLength = ArrayType['length'] // number

type TupleType = ['123', 123]
type tupleLength = TupleType['length'] // 2