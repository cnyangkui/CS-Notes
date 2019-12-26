// 牛客网：https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4?tpId=13&tqId=11161&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

// 方法1：跳n级台阶的跳法 = 跳n-1级台阶,接着再面跳1级的跳法 + 跳n-2级台阶,接着再跳2级的跳法。因此该问题可转化为斐波那契数列问题。
function jumpFloor(number) {
  if (number === 1 || number === 2) {
    return number;
  } else {
    return jumpFloor(number - 1) + jumpFloor(number - 2);
  }
}

// 方法2：斐波那契数列循环
function jumpFloor2(number) {
  let fx = 0, gx = 1;
  while(number--) {
    gx += fx;
    fx = gx - fx;
  }
  return gx;
}
let o = jumpFloor2(5);
console.log(o);