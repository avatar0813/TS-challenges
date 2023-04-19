// type MyCapitalize<S extends string> = S extends `${infer T}${infer U}` ? `${Uppercase<T>}${U}` : S


// 知识点  字面量类型方法: Uppercase 
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype



// 不使用ts方法
interface ToUpperCase {
    a: "A"
    b: "B"
    c: "C"
    d: "D"
    e: "E"
    f: "F"
    g: "G"
    h: "H"
    i: "I"
    j: "J"
    k: "K"
    l: "L"
    m: "M"
    n: "N"
    o: "O"
    p: "P"
    q: "Q"
    r: "R"
    s: "S"
    t: "T"
    u: "U"
    v: "V"
    w: "W"
    x: "X"
    y: "Y"
    z: "Z"
}

type lowerCase = keyof ToUpperCase
type MyCapitalize<S extends string> = S extends `${infer T extends lowerCase}${infer U}` ? `${ToUpperCase[T]}${U}` : S
