// 牛客网：https://www.nowcoder.com/practice/435fb86331474282a3499955f0a41e8b?tpId=13&tqId=11191&tPage=2&rp=2&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function TreeDepth(pRoot) {
  if (pRoot === null) {
    return 0;
  }
  let leftDep = TreeDepth(pRoot.left);
  let rightDep = TreeDepth(pRoot.right);
  return Math.max(leftDep, rightDep) + 1;
}

let root = new TreeNode(1);
let n21 = new TreeNode(2);
root.left = n21;
let o = TreeDepth(root);
console.log(o);