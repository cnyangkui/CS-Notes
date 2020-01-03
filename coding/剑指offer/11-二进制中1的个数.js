// 牛客网：https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8?tpId=13&tqId=11164&tPage=1&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 */

function NumberOf1(n) {
  let count = 0,
    flag = 1,
    p = 1;
  while (p <= 32) {
    if (flag & n) {
      count++;
    }
    flag = flag << 1;
    p++;
  }
  return count;
}

let o = NumberOf1(-1);
console.log(o);