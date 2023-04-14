type MyAwaited<T extends PromiseLike<any> > = T extends PromiseLike<infer U>
  ? U extends Promise<any>
    ? Awaited<U>
    : U
  : never;


  /**
   * 知识点
   * - 入参条件限制
   * - infer 推断参数 以供使用
   * - 递归调用本函数
   * PromiseLike 类型
   */
  // 知识点： 入参条件限制
  //
  // 递归调用