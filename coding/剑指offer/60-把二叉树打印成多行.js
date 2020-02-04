// 牛客网：https://www.nowcoder.com/practice/445c44d982d04483b04a54f298796288?tpId=13&tqId=11213&tPage=3&rp=3&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function Print(pRoot) {
  let res = [];
  if (pRoot === null) {
    return res;
  }
  let queue = [], first = -1, currentLevel = 1, nextLevel = 0, level = [];
  queue.push(pRoot);
  first += 1;
  while (first < queue.length) {
    let top = queue[first];
    level.push(top.val);
    if (top.left) {
      queue.push(top.left);
      nextLevel++;
    }
    if (top.right) {
      queue.push(top.right);
      nextLevel++;
    }
    first++;
    currentLevel--;
    if (currentLevel == 0) {
      res.push(level);
      level = [];
      currentLevel = nextLevel;
      nextLevel = 0;
    }
  }
  return res;
}

let root = new TreeNode(8);
let node21 = new TreeNode(8);
let node22 = new TreeNode(7);
let node31 = new TreeNode(9);
let node32 = new TreeNode(2);
let node33 = new TreeNode(4);
let node34 = new TreeNode(7);
root.left = node21;
root.right = node22;
node21.left = node31;
node21.right = node32;
node22.left = node33;
node22.right = node34;
let o = Print(root);
console.log(o);