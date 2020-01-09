// 牛客网：https://www.nowcoder.com/practice/947f6eb80d944a84850b0538bf0ec3a5?tpId=13&tqId=11179&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

// 方法1：中序遍历的递归方法
function Convert(pRootOfTree) {
  let list = [];
  inOrder(pRootOfTree, list);
  let head = list[0],
    pointer = head;
  for (let i = 1; i < list.length; i++) {
    pointer.right = list[i];
    list[i].left = pointer;
    pointer = list[i];
  }
  return head;
}

function inOrder(root, list) {
  if (root === null) {
    return root;
  }
  inOrder(root.left, list);
  list.push(root);
  inOrder(root.right, list);
}

let root = new TreeNode(4);
let node21 = new TreeNode(2);
let node22 = new TreeNode(6);
let node31 = new TreeNode(1);
let node32 = new TreeNode(3);
let node33 = new TreeNode(5);
let node34 = new TreeNode(7);
root.left = node21;
root.right = node22;
node21.left = node31;
node21.right = node32;
node22.left = node33;
node22.right = node34;
let o = Convert(root);
console.log(o);