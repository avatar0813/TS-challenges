type First<T extends any[]> = T extends [infer first, ...infer rest] ? first : never 



// JS思想
const first = (arr = []) =>{
  return arr[0]
}

// 第二种 JS 
const first2 = (arr = []) => {
  const [first, ...rest] = arr
  return first
}


/**
 * 知识点
 * ts 空数组返回的是never
 * extends ？： 类型条件判断
 * extends 继承
 */

// 第一种
// type First<T extends any[]> = T extends [] ? never : T[0]


// 第二种
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 第三种 使用 T[number]  获取T数组的union类型， 判断T[0] 是否在union中， 当一个值 extends ? : 联合类型时，会分布式对比联合类型中的每一个类型元素
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 第四种 使用 infer 推断类型， 如果 T 符合 [infer first, ...infer rest]的类型推断(即 表示T 只有有first这个类型元素)， 则返回 first，否之返回never
// type First<T extends any[]> = T extends [infer first, ...infer rest] ? first : never 


type ages = [1,2,3]
type t1 = ages[number] // 1 | 2 | 3