// 牛客网：https://www.nowcoder.com/practice/8b3b95850edb4115918ecebdf1b4d222?tpId=13&tqId=11192&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function IsBalanced_Solution(pRoot) {
  return depth(pRoot) !== -1;
}

function depth(pRoot) {
  if (pRoot === null) {
    return 0;
  }
  let leftDep = depth(pRoot.left);
  if (leftDep === -1) {
    return -1;
  }
  let rightDep = depth(pRoot.right);
  if (rightDep === -1) {
    return -1;
  }
  if (Math.abs(leftDep - rightDep) > 1) {
    return -1;
  }
  return 1 + Math.max(leftDep, rightDep);
}

let root = new TreeNode(1);
let n21 = new TreeNode(2);
root.left = n21;
let o = IsBalanced_Solution(root);
console.log(o);