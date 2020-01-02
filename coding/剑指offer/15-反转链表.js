// 牛客网：https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=13&tqId=11168&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 输入一个链表，反转链表后，输出新链表的表头。
 */

function ListNode(x) {
  this.val = x;
  this.next = null;
}

function ReverseList(pHead) {
  if (pHead === null || pHead.next === null) {
    return pHead;
  }
  let p = pHead,
    q = pHead.next,
    r = q.next;
  while (r !== null) {
    q.next = p;
    p = q;
    q = r;
    r = r.next;
  }
  q.next = p;
  pHead.next = null;
  return q;
}

let i1 = new ListNode(1);
let i2 = new ListNode(2);
let i3 = new ListNode(3);
i1.next = i2;
i2.next = i3;
let o = ReverseList(i1);
console.log(o);