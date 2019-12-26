// 牛客网：https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3?tpId=13&tqId=11160&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

// 方法1：递归方法时间复杂度过大，运行超时，所以使用斐波那契数列的递推公式
function Fibonacci(n) {
  let a = Math.sqrt(5);
  return Math.round(1 / a * (((1 + a) / 2) ** n - ((1 - a) / 2) ** n));
}

// 方法2：循环
function Fibonacci2(n) {
  let fx = 0, gx = 1;
  while(n--) {
    gx += fx;
    fx = gx - fx;
  }
  return fx;
}

let o = Fibonacci2(5);
console.log(o);