
type KebabCase<T extends string> = T extends `${infer L}${infer R}`
? R extends Uncapitalize<R>
  ? `${Uncapitalize<L>}${KebabCase<R>}`
  : `${Uncapitalize<L>}-${KebabCase<R>}`
: T


/**
 * 解题思路
 * 第一个字母都是要小写的
 * 看后面的字符串 首字母是否是小写的(也就是跟自己本身首字母小写之后做对比)
 * 如果都是小写的继续递归
 * 如果是大写的 在前面添加-，递归之后将首字母小写
 */