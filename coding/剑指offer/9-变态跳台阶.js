// 牛客网：https://www.nowcoder.com/practice/22243d016f6b47f2a6928b4313c85387?tpId=13&tqId=11162&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */

// 方法1：f(n)=f(1)+f(2)+...+f(n-1)+1. f(1)=1, f(2)=2, f(3)=1+2+1=4, f(4)=1+2+4+1=8, f(5)=1+2+4+8+1=16, ... , 
function jumpFloorII(number) {
  return Math.pow(2, number - 1);
}

// 方法2：f(n)=f(1)+f(2)+...+f(n-1)+1=2f(n-1)
function jumpFloorII2(number) {
  if (number === 1) {
    return 1;
  } else {
    return 2 * jumpFloorII2(number - 1)
  }
}

let o = jumpFloorII2(5);
console.log(o);