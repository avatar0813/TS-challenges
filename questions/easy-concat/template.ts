type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

// unknown 比 any 更安全， 表示是有类型的 非never，