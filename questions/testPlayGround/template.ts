type StringToUnionTest<T extends string> = T extends ''
? never
: T extends `${infer L}${infer R}`
    ? L | StringToUnion<R>
    : T