// 牛客网：https://www.nowcoder.com/practice/e8a1b01a2df14cb2b228b30ee6a92163?tpId=13&tqId=11181&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 */

function MoreThanHalfNum_Solution(numbers) {
  numbers.sort();
  let mid = ~~(numbers.length / 2),
    target = numbers[mid],
    i = 0,
    j = numbers.length - 1;
  while (numbers[i] < target) {
    i++
  }
  while (numbers[j] > target) {
    j--;
  }
  if (j - i + 1 >= (~~(numbers.length / 2) + 1)) {
    return target;
  } else {
    return 0;
  }
}

let array = [1, 2, 3, 2, 2, 2, 5, 4, 2];
let o = MoreThanHalfNum_Solution(array);
console.log(o);