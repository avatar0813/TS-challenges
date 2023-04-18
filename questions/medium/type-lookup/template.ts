type LookUp<U extends { type: string }, K extends string> = U extends {
  type: K
} ? U : never
