type Pop<T extends any[]> = T extends [] 
? [] 
: T extends [...infer Rest, any] 
  ? Rest
  : never