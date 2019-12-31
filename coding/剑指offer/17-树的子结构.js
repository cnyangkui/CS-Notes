// 牛客网：https://www.nowcoder.com/practice/6e196c44c7004d15b1610b9afca8bd88?tpId=13&tqId=11170&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function HasSubtree(pRoot1, pRoot2) {

}

let root1 = new TreeNode(8);
let node1_21 = new TreeNode(8);
let node1_22 = new TreeNode(7);
let node1_31 = new TreeNode(9);
let node1_32 = new TreeNode(2);
root1.left = node1_21;
root1.right = node1_22;
node1_21.left = node1_31;
node1_21.right = node1_32;
let root2 = new TreeNode(8);
let node2_21 = new TreeNode(9);
let node2_22 = new TreeNode(2);
root2.left = node2_21;
root2.right = node2_22;
let o = HasSubtree(root1, root2);
console.log(o);