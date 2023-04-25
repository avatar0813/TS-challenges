type Reverse<T extends any[]> = T extends [...infer Rest, infer U]
? [U, ...Reverse<Rest>]
: T