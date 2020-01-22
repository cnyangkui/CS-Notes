// 牛客网：https://www.nowcoder.com/practice/fc533c45b73a41b0b44ccba763f866ef?tpId=13&tqId=11209&tPage=3&rp=3&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
 */

function ListNode(x) {
  this.val = x;
  this.next = null;
}

function deleteDuplication(pHead) {
  let pNode = pHead, preNode = null;
  while(pNode) {
    if(pNode.next === null) {
      preNode = pNode;
      pNode = pNode.next;
    } else if(pNode.val !== pNode.next.val) {
      preNode = pNode;
      pNode = pNode.next;
    } else {
      let pNext = pNode.next;
      while(pNext && pNext.val === pNode.val) {
        pNext = pNext.next;
      }
      if(preNode) {
        preNode.next = pNext;
      } else {
        pHead = pNext;
      }
      pNode = pNext;
    }
  }
  return pHead;
}

let i1 = new ListNode(1);
let i2 = new ListNode(2);
let i3 = new ListNode(3);
let i4 = new ListNode(4);
let i5 = new ListNode(5);
let i6 = new ListNode(5);
let i7 = new ListNode(5);
i1.next = i2;
i2.next = i3;
i3.next = i4;
i4.next = i5;
i5.next = i6;
i6.next = i7;
let o = deleteDuplication(i1);
console.log(JSON.stringify(o));