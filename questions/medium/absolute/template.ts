type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}`
? U : `${T}`


/**
 * 解题思路及问题点
 * 返回的都是字符串类型，那么需要将原值转为字符串
 * extends `-${U}` U已经是一个字符串了 直接返回
 * 返回的原值也需要是字符串
 */


//错误解答
// type Absolute<T extends number | string | bigint> = T extends `-${infer U}`
// ? U : T