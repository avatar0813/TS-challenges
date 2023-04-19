type ReplaceAll<O extends string, T extends string, R extends string> = 
T extends ''
? O
: O extends `${infer F}${T}${infer L}`
    ? `${F}${R}${ReplaceAll<L, T, R>}`
    : O

// `${F}${R}${ReplaceAll<L, T, R>}` : 只需要递归替换后面一截L