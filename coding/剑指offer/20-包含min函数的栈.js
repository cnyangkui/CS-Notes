// 牛客网：https://www.nowcoder.com/practice/4c776177d2c04c2494f2555c9fcc1e49?tpId=13&tqId=11173&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O(1) ）。
 */

// 第一个栈stack存放所有元素，第二个栈minStack每次存入小于等于栈顶的元素
let stack = [],
  minStack = [];

function push(node) {
  stack.push(node);
  if (minStack.length === 0) {
    minStack.push(node);
  } else {
    if (node <= minStack[minStack.length - 1]) {
      minStack.push(node);
    }
  }
}

function pop() {
  if (stack.length === 0) {
    return null;
  }
  let top = stack.pop();
  if (top === minStack[minStack.length - 1]) {
    minStack.pop();
  }
  return top;
}

function top() {
  if (stack.length === 0) {
    return null;
  }
  return stack[stack.length - 1];
}

function min() {
  return minStack[minStack.length - 1];
}

push(2);
push(3);
push(1);
pop();
let o = min();
console.log(o);