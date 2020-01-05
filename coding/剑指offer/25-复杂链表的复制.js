// 牛客网：https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba?tpId=13&tqId=11178&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
 * （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */

function RandomListNode(x) {
  this.label = x;
  this.next = null;
  this.random = null;
}

/**
 * 解题思路
 * 1、复制每个节点，如：复制节点A得到A1，将A1插入节点A后面
 * 2、遍历链表，A1->random = A->random->next;
 * 3、将链表拆分成原链表和复制后的链表
 */
function Clone(pHead) {
  if (pHead === null) {
    return pHead;
  }
  let current = pHead;
  while (current !== null) {
    let node = new RandomListNode(current.label);
    node.next = current.next;
    current.next = node;
    current = node.next;
  }
  current = pHead;
  while (current !== null) {
    if (current.random) {
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }
  let copy = pHead.next,
    p1 = pHead,
    p2 = copy;
  while (p2 !== null) {
    p1.next = p1.next.next;
    p2.next = p2.next ? p2.next.next : null
    p1 = p1.next;
    p2 = p2.next
  }
  return copy;
}

let node1 = new RandomListNode(1);
let node2 = new RandomListNode(2);
let node3 = new RandomListNode(3);
let node4 = new RandomListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node1.random = node3;
node2.random = node4;
let o = Clone(node1);
console.log(o);