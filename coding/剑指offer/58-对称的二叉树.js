// 牛客网：https://www.nowcoder.com/practice/ff05d44dfdb04e1d83bdbdab320efbcb?tpId=13&tqId=11211&tPage=3&rp=3&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

// 方法1：递归
function isSymmetrical(pRoot) {
  return isSymmetricalCore(pRoot, pRoot);
}

function isSymmetricalCore(pRoot1, pRoot2) {
  if (pRoot1 === null && pRoot2 === null) {
    return true;
  }
  if (pRoot1 === null || pRoot2 === null) {
    return false;
  }
  if (pRoot1.val !== pRoot2.val) {
    return false;
  }
  return isSymmetricalCore(pRoot1.left, pRoot2.right) && isSymmetricalCore(pRoot1.right, pRoot2.left);
}

// 方法2：前序遍历（root，left，right）是否和（root，right，left）遍历结果相同
function isSymmetrical2(pRoot) {
  let list1 = [], list2 = [];
  preOrder(pRoot, list1);
  symmetricalOrder(pRoot, list2);
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }
  return true;
}

function preOrder(pRoot, list) {
  if (pRoot === null) {
    list.push(pRoot);
    return;
  }
  list.push(pRoot.val);
  preOrder(pRoot.left, list);
  preOrder(pRoot.right, list);
}

function symmetricalOrder(pRoot, list) {
  if (pRoot === null) {
    list.push(pRoot);
    return;
  }
  list.push(pRoot.val);
  symmetricalOrder(pRoot.right, list);
  symmetricalOrder(pRoot.left, list);
}

let root = new TreeNode(8);
let n21 = new TreeNode(6);
let n22 = new TreeNode(6);
let n31 = new TreeNode(5);
let n32 = new TreeNode(7);
let n33 = new TreeNode(7);
let n34 = new TreeNode(5);
root.left = n21;
root.right = n22;
n21.left = n31;
n21.right = n32;
n22.left = n33;
n22.right = n34;
let o = isSymmetrical2(root);
console.log(o);