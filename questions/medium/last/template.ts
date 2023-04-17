type Last<T extends any[]> = T extends [...infer Rest, infer L] ? L : never


// easy game！