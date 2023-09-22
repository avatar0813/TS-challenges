
type Chainable<T = {}> = {
  option: <K extends string, V>(key: K extends keyof T ?
    V extends T[K] ? never : K
    : K, value: V) => Chainable<Omit<T, K> & Record<K, V>>
  get: () => T
}

/**
 * 链式调用， option 是添加属性的过程，get 是返回实例
 * 
 * 所以option中如果已存在的类型，则不添加，只添加未存在的 ==> V extends T[K] ? never : K
 * option 返回的是重组的对象(包含原对象与新添加的对象), 所以为===> Omit<T, K> & Record<K, V>，
 */