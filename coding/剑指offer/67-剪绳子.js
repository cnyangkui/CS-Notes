// 牛客网：https://www.nowcoder.com/practice/57d85990ba5b440ab888fc72b0751bf8?tpId=13&tqId=33257&tPage=4&rp=4&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1），每段绳子的长度记为k[0],k[1],...,k[m]。请问k[0]xk[1]x...xk[m]可能的最大乘积是多少？
 * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 */

//  方法1：动态规划
function cutRope(number) {
  if (number < 2) {
    return 0;
  }
  if (number === 2) {
    return 1;
  }
  if (number === 3) {
    return 2;
  }
  let fn = [0, 1, 2, 3];
  for (let i = 4; i <= number; i++) {
    let max = 0;
    for (let j = 1; j <= ~~(i / 2); j++) {
      let f = fn[j] * fn[i - j];
      if (f > max) {
        max = f;
      }
    }
    fn.push(max);
  }
  return fn[fn.length - 1];
}

let o = cutRope(8);
console.log(o);