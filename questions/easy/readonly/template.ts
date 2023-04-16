type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

// 使用keyof lookup