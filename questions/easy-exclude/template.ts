type MyExclude<T, U> = T extends U ? never  : T

// js 思路
function MyExclude(T = [], U = []) {
  const result = []

  for(let i = 0; i < T.length; i++) {
    const t = T[i]
    let bool = false

    for (let j = 0; j < U.length; j++) {
      const u = T[j]

      if (t === u) {
        bool = true
      }
    }

    if (!bool) {
      result.push(t)
    }
  }
  return result
}

/**
 * 思路
 * 联合类型A extends 联合类型B，会将A中的每个元素 
 * 与B 做extends 判断(联合类型 extends ? : 的分发机制)
 * 
 * 此时 : T 就是原本T的分发出来的类型元素
 */