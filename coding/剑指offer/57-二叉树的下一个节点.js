// 牛客网：https://www.nowcoder.com/practice/9023a0c988684a53960365b889ceaf5e?tpId=13&tqId=11210&tPage=3&rp=3&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
 */

function TreeLinkNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
  this.next = null;
}

function GetNext(pNode) {
  if (!pNode) {
    return null;
  }
  let pNext = null;
  if (pNode.right !== null) { // 有右子树
    pNext = pNode.right;
    while (pNext.left) {
      pNext = pNext.left;
    }
  } else if (pNode.next) { // 没有右子树且不是根节点
    if (pNode === pNode.next.left) { // 该节点是其父亲节点的左子节点
      pNext = pNode.next;
    } else { // 该节点是其父亲节点的右子节点
      pNext = pNode.next;
      while (pNext.next && pNext === pNext.next.right) { // 沿着父节点向上找，直到找到某节点是其父亲节点的左子节点
        pNext = pNext.next;
      }
      pNext = pNext.next;
    }
  }
  return pNext;
}

let root = new TreeLinkNode('a');
let n21 = new TreeLinkNode('b');
let n22 = new TreeLinkNode('c');
let n31 = new TreeLinkNode('d');
let n32 = new TreeLinkNode('e');
root.left = n21;
root.right = n22;
n21.next = root;
n22.next = root;
n21.left = n31;
n21.right = n32;
n31.next = n21;
n32.next = n21;
let o = GetNext(root);
console.log(o);
