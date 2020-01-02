// 牛客网：https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6?tpId=13&tqId=11158&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。队列中的元素为int类型。
 */

let stack1 = [],
  stack2 = [];

function push(node) {
  stack1.push(node);
}

function pop() {
  if (stack2.length === 0) {
    while (stack1.length) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop();
}

push(1);
push(2);
push(3);
console.log(pop());
push(4);
console.log(pop());
console.log(pop());
console.log(pop());