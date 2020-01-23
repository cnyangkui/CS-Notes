// 牛客网：https://www.nowcoder.com/practice/6f8c901d091949a5837e24bb82a731f2?tpId=13&tqId=11206&tPage=3&rp=3&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
 */

// 方法1
function isNumeric(s) {
  let dot = false,
    e = false,
    i = 0;
  if (s[i] === '+' || s[i] === '-') {
    symbol = true;
    i++;
  }
  if (i === s.length) {
    return false;
  }
  while (i < s.length) {
    let charcode = s[i].charCodeAt();
    if (e === false) {
      if (charcode >= 48 && charcode <= 57) {
        i += 1;
      } else if (s[i] === '+' || s[i] === '-') {
        return false;
      } else if (s[i] === '.') {
        if (dot === false) {
          dot = true;
          i++;
        } else {
          return false;
        }
      } else if (s[i] === 'e' || s[i] === 'E') {
        if (parseInt(s[i - 1]) || s[i - 1] === '.') {
          e = true;
          i += 1;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      if (s[i] === '+' || s[i] === '-') {
        if (s[i - 1] === 'e' || s[i - 1] === 'E') {
          i++;
        } else {
          return false;
        }
      } else if (charcode >= 48 && charcode <= 57) {
        i++;
      } else {
        return false;
      }
    }
  }
  let endCharcode = s[s.length - 1].charCodeAt();
  if (endCharcode < 48 || endCharcode > 57) {
    return false;
  }
  return true;
}

// 方法2
function isNumeric2(s) {
  return !isNaN(s);
}

function isNumeric3(s) {
  return s.match(/[+-]?\d*(\.\d*)?([eE][+-]?\d+)?/g)[0] === s;
}

let o = isNumeric3('10d0');
console.log(o);