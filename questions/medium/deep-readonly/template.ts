type DeepReadonly<T> = { 
  readonly [P in keyof T]: keyof T[P] extends never 
  ? T[P] 
  : DeepReadonly<T[P]> 
}
// 不太懂这里 keyof T[p] extends never


type test = (keyof string) extends never ? true : false // false ?