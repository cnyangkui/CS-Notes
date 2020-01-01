// 牛客网：https://www.nowcoder.com/practice/564f4c26aa584921bc75623e48ca3011?tpId=13&tqId=11171&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function Mirror(root) {
  if (root === null) {
    return root;
  }
  [root.left, root.right] = [root.right, root.left];
  Mirror(root.left);
  Mirror(root.right);
  return root;
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
let o = Mirror(root);
console.log(o);