// 牛客网：https://www.nowcoder.com/practice/253d2c59ec3e4bc68da16833f79a38e4?tpId=13&tqId=11208&tPage=3&rp=3&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 */

function ListNode(x) {
  this.val = x;
  this.next = null;
}

function EntryNodeOfLoop(pHead) {
  let nodeInLoop = hasLoop(pHead);
  if (nodeInLoop === null) {
    return null;
  }
  let pNode = nodeInLoop.next,
    count = 1;
  while (pNode !== nodeInLoop) {
    pNode = pNode.next;
    count++;
  }
  let fast = pHead,
    slow = pHead;
  for (let i = 0; i < count; i++) {
    fast = fast.next;
  }
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

function hasLoop(pHead) {
  if (pHead === null) {
    return null;
  }
  let slow = pHead.next;
  if (slow === null) {
    return null;
  }
  let fast = slow.next;
  while (slow !== null && fast !== null) {
    if (slow === fast) {
      return slow;
    }
    slow = slow.next;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    }
  }
  return null;
}

let i1 = new ListNode(1);
let i2 = new ListNode(2);
let i3 = new ListNode(3);
let i4 = new ListNode(4);
let i5 = new ListNode(5);
let i6 = new ListNode(6);
i1.next = i2;
i2.next = i3;
i3.next = i4;
i4.next = i5;
i5.next = i6;
i6.next = i3;
let o = EntryNodeOfLoop(i1);
console.log(o);