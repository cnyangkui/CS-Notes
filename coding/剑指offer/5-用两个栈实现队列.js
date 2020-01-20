// 牛客网：https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6?tpId=13&tqId=11158&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。队列中的元素为int类型。
 */

let inStack = [],
  popStack = [];

function push(node) {
  inStack.push(node);
}

function pop() {
  if (popStack.length === 0) {
    while (inStack.length) {
      popStack.push(inStack.pop());
    }
  }
  return popStack.pop();
}

push(1);
push(2);
push(3);
console.log(pop());
push(4);
console.log(pop());
console.log(pop());
console.log(pop());