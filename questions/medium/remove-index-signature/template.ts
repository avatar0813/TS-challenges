type RemoveIndexSignature<T> = {
  [
  K in keyof T
  as (
    PropertyKey extends keyof T[K]
    ? never
    : K
  )
  ]: T[K]
};

/**
 * 问题点：怎么判断是 标记类型索引
 * PropertyKey 是什么？
 * 
 * declare type PropertyKey = string | number | symbol;
 * 内置类型： 表示对象的所有可能的属性名类型
 */