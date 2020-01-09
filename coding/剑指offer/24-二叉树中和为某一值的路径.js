// 牛客网：https://www.nowcoder.com/practice/b736e784e3e34731af99065031301bca?tpId=13&tqId=11177&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 * (注意: 在返回值的list中，数组长度大的数组靠前)
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function FindPath(root, expectNumber) {
  let paths = [],
    path = [];
  return findpath(root, expectNumber, paths, path);
}

function findpath(root, expectNumber, paths, path) {
  if (root === null) {
    return paths;
  }
  path.push(root.val);
  expectNumber -= root.val;
  if (expectNumber === 0 && root.left === null && root.right === null) {
    paths.push([...path]);
  }
  paths = findpath(root.left, expectNumber, paths, path);
  paths = findpath(root.right, expectNumber, paths, path);
  path.pop();
  return paths;
}

let root = new TreeNode(1);
let node21 = new TreeNode(2);
let node22 = new TreeNode(3);
let node31 = new TreeNode(4);
let node32 = new TreeNode(5);
root.left = node21;
root.right = node22;
node21.left = node31;
node21.right = node32;
let o = FindPath(root, 7);
console.log(o);