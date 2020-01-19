// 牛客网：https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&tqId=11156&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
 */

function ListNode(x) {
  this.val = x;
  this.next = null;
}

function printListFromTailToHead(head) {
  let list = [];
  if (head === null) {
    return list;
  }
  while (head != null) {
    list.unshift(head.val);
    head = head.next;
  }
  return list;
}

let i1 = new ListNode(1);
let i2 = new ListNode(2);
let i3 = new ListNode(3);
i1.next = i2;
i2.next = i3;
let o = printListFromTailToHead(i1);
console.log(o);