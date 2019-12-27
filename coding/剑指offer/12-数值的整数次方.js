// 牛客网：https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00?tpId=13&tqId=11165&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

// Pow(base, n) == Pow(base, n/2)*Pow(base, n/2) if n%2==0, Pow(base, n) == Pow(base, n//2)*Pow(base, n//2)*base if n%2!=0. a//b表示整除.
function Power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  let result = Power(base, ~~(Math.abs(exponent) / 2)) ** 2;
  if (exponent % 2 !== 0) {
    result *= base;
  }
  if (exponent > 0) {
    return result;
  } else {
    return 1 / result;
  }
}

let o = Power(3, 3);
console.log(o);