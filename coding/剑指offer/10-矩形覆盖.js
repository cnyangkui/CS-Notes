// 牛客网：https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6?tpId=13&tqId=11163&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

// f(n)=f(n-1)+f(n-2)，可转化为斐波那契数列问题
function rectCover(number) {
  if (number === 0) {
    return 0;
  }
  let fx = 0,
    gx = 1;
  while (number--) {
    gx += fx;
    fx = gx - fx;
  }
  return gx;
}

let o = rectCover(5);
console.log(o);