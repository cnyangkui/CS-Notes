// 牛客网：https://www.nowcoder.com/practice/564f4c26aa584921bc75623e48ca3011?tpId=13&tqId=11171&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 操作给定的二叉树，将其变换为源二叉树的镜像。
 * 输入描述:
 * 二叉树的镜像定义：源二叉树 
 *   	    8
 *   	   /  \
 *   	  6   10
 *   	 / \  / \
 *   	5  7 9  11
 * 镜像二叉树
 *   	    8
 *   	   /  \
 *   	  10   6
 *   	 / \  / \
 *   	11 9 7   5
 */

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