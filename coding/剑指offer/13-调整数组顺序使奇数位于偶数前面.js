// 牛客网：https://www.nowcoder.com/practice/beb5aa231adc45b2a5dcc5b62c93f593?tpId=13&tqId=11166&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

// 方法1
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

// 方法2
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