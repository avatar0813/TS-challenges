type IsNever<T> = [T] extends [never] ? true : false

// 不能直接判断一个类型是never  但是可以使用[T] extends [never] 可以判断