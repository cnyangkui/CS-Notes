// 牛客网：https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337?tpId=13&tqId=11169&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

function ListNode(x) {
  this.val = x;
  this.next = null;
}

// 方法1：创建新的链表完成合并
function Merge(pHead1, pHead2) {
  if (pHead1 && pHead2 === null) {
    return pHead1 || pHead2;
  }
  let head = null,
    current = null;
  while (pHead1 !== null && pHead2 !== null) {
    let node;
    if (pHead1.val < pHead2.val) {
      node = new ListNode(pHead1.val);
      pHead1 = pHead1.next;
    } else {
      node = new ListNode(pHead2.val);
      pHead2 = pHead2.next;
    }
    if (head === null) {
      head = node;
      current = head;
    } else {
      current.next = node;
      current = current.next;
    }
  }
  while (pHead1 !== null) {
    let node = new ListNode(pHead1.val);
    current.next = node;
    current = current.next;
    pHead1 = pHead1.next;
  }
  while (pHead2 !== null) {
    let node = new ListNode(pHead2.val);
    current.next = node;
    current = current.next;
    pHead2 = pHead2.next;
  }
  return head;
}

// 方法2：在原有链表上操作完成合并
function Merge2(pHead1, pHead2) {
  let head = new ListNode(null),
    current = head;
  while (pHead1 !== null && pHead2 !== null) {
    if (pHead1.val < pHead2.val) {
      current.next = pHead1;
      current = current.next;
      pHead1 = pHead1.next;
    } else {
      current.next = pHead2;
      current = current.next;
      pHead2 = pHead2.next;
    }
  }
  if (pHead1 !== null) {
    current.next = pHead1;
  }
  if (pHead2 !== null) {
    current.next = pHead2;
  }
  return head.next;
}

let i1 = new ListNode(1);
let i2 = new ListNode(2);
let i3 = new ListNode(3);
i1.next = i2;
i2.next = i3;
let j1 = new ListNode(1);
let j2 = new ListNode(2);
let j3 = new ListNode(3);
j1.next = j2;
j2.next = j3;
let o = Merge2(i1, j1);
console.log(o);