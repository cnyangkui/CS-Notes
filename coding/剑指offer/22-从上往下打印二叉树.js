// 牛客网：https://www.nowcoder.com/practice/7fe2212963db4790b57431d9ed259701?tpId=13&tqId=11175&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function PrintFromTopToBottom(root) {
  let queue = [],
    front = -1,
    nodelist = [];
  if (root === null) {
    return nodelist;
  }
  queue.push(root);
  front += 1;
  while (front < queue.length) {
    if (queue[front].left) {
      queue.push(queue[front].left);
    }
    if (queue[front].right) {
      queue.push(queue[front].right);
    }
    nodelist.push(queue[front].val);
    front++;
  }
  return nodelist;
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
let o = PrintFromTopToBottom(root);
console.log(o);