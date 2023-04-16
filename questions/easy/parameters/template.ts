type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer X) => any
? X
: never

// infer 结合 extends  直接将 args 的类型  就是返回parameters类型