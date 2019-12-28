// 牛客网：https://www.nowcoder.com/practice/529d3ae5a407492994ad2a246518148a?tpId=13&tqId=11167&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

function ListNode(x) {
  this.val = x;
  this.next = null;
}

function FindKthToTail(head, k) {
  if (k <= 0 || head === null) {
    return null;
  }
  let p1 = head,
    p2 = head;
  while (--k && p1.next !== null) {
    p1 = p1.next;
  }
  if (k > 0) {
    return null;
  }
  while (p1.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
}

let i1 = new ListNode(1);
let i2 = new ListNode(2);
let i3 = new ListNode(3);
let i4 = new ListNode(4);
let i5 = new ListNode(5);
i1.next = i2;
i2.next = i3;
i3.next = i4;
i4.next = i5;
let o = FindKthToTail(i1, 0);
console.log(o);