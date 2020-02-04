// 牛客网：https://www.nowcoder.com/practice/91b69814117f4e8097390d107d2efbe0?tpId=13&tqId=11212&tPage=3&rp=3&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
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
  let stacks = [[], []], current = 0, next = 1, level = [];
  stacks[current].push(pRoot);
  while (stacks[current].length != 0 || stacks[next].length != 0) {
    let top = stacks[current].pop();
    level.push(top.val);
    if (current === 0) {
      if (top.left) {
        stacks[next].push(top.left);
      }
      if (top.right) {
        stacks[next].push(top.right);
      }
    } else if (current === 1) {
      if (top.right) {
        stacks[next].push(top.right);
      }
      if (top.left) {
        stacks[next].push(top.left);
      }
    }
    if (stacks[current].length === 0) {
      res.push(level);
      level = [];
      current = 1 - current;
      next = 1 - next;
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