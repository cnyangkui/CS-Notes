// 牛客网：https://www.nowcoder.com/practice/beb5aa231adc45b2a5dcc5b62c93f593?tpId=13&tqId=11166&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */

// 方法1：在原数组上操作
function reOrderArray(array) {
  let current = array.length;
  let evenCount = 0;
  while (current--) {
    if (array[current] % 2 === 0) {
      for (let i = current; i < array.length - 1 - evenCount; i++) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
      evenCount++;
    }
  }
  return array;
}

// 方法2：创建了新的数组
function reOrderArray2(array) {
  let odds = [],
    evens = [];
  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    } else {
      odds.push(value);
    }
  });
  return odds.concat(evens);
}

let array = [1, 2, 3, 4, 5, 6];
let o = reOrderArray2(array);
console.log(o);