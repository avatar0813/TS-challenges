type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
