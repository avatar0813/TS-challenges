type MyReadonly2<T, U extends keyof T = keyof T> = {
  readonly [K in keyof T]: T[K]
} & {
  [K in keyof T as K extends U ? never : K]: T[K] 
}


/**
 * 知识点
 * case1： 没有第二个参数的时候可以设置默认参数，U 就等于 keyof T
 * 首先将所有的 key 都变成readonly 
 * 使用交集 再将不在U中的元素变为非readonly
 */