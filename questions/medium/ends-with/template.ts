type EndsWith<T extends string, U extends string> = 
T extends `${infer start}${U}`
? true
: false