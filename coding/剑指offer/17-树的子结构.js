// 牛客网：https://www.nowcoder.com/practice/6e196c44c7004d15b1610b9afca8bd88?tpId=13&tqId=11170&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

// 方法1
function HasSubtree(pRoot1, pRoot2) {
  if (pRoot1 === null || pRoot2 === null) {
    return false;
  }
  let flag = false;
  if (pRoot1.val === pRoot2.val) {
    flag = tree1HasTree2(pRoot1, pRoot2);
  }
  if (!flag) {
    flag = HasSubtree(pRoot1.left, pRoot2);
  }
  if (!flag) {
    flag = HasSubtree(pRoot1.right, pRoot2);
  }
  return flag;
}

function tree1HasTree2(pRoot1, pRoot2) {
  if (pRoot2 === null) {
    return true;
  }
  if (pRoot1 === null) {
    return false;
  }
  if (pRoot1.val !== pRoot2.val) {
    return false
  }
  return tree1HasTree2(pRoot1.left, pRoot2.left) && tree1HasTree2(pRoot1.right, pRoot2.right);
}

// 方法2：和方法1思路一样，只是写法不同
function HasSubtree2(pRoot1, pRoot2) {
  if (pRoot2 === null) { // 第一次pRoot2为null返回false，之后pRoot2为null都返回true
    return false;
  }
  return subtree(pRoot1, pRoot2);
}

function subtree(pRoot1, pRoot2) {
  if (pRoot2 === null) {
    return true;
  }
  if (pRoot1 === null) {
    return false;
  }
  let flag = false;
  if (pRoot1.val === pRoot2.val) {
    flag = subtree(pRoot1.left, pRoot2.left) && subtree(pRoot1.right, pRoot2.right);
  }
  if (!flag) {
    flag = subtree(pRoot1.left, pRoot2);
  }
  if (!flag) {
    flag = subtree(pRoot1.right, pRoot2);
  }
  return flag;
}

let root1 = new TreeNode(8);
let node1_21 = new TreeNode(8);
let node1_22 = new TreeNode(7);
let node1_31 = new TreeNode(9);
let node1_32 = new TreeNode(2);
let node1_41 = new TreeNode(4);
let node1_42 = new TreeNode(7);
root1.left = node1_21;
root1.right = node1_22;
node1_21.left = node1_31;
node1_21.right = node1_32;
node1_32.left = node1_41;
node1_32.right = node1_42;
let root2 = new TreeNode(8);
let node2_21 = new TreeNode(9);
let node2_22 = new TreeNode(2);
root2.left = node2_21;
root2.right = node2_22;
let o = HasSubtree2(root1, root2);
console.log(o);