interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

type InorderTraversal<T extends TreeNode | null, NT extends TreeNode = NonNullable<T>> =
T extends null
? []
: [...InorderTraversal<NT["left"]>, NT["val"], ...InorderTraversal<NT["right"]>]


/**
 * 知识点：
 * NonNullable 排除类型中的 null 和 undefined
 * 
 * 原类型中的 T 是联合类型，带有null类型，不能直接取T['val’], 故借助NonNullable生成一个不含null的泛型
 * 
 * 解题思路：
 * 左右递归结构数组，保持原有判断为null时返回空数组
 */
