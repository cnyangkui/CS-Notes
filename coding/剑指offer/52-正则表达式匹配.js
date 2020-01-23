// 牛客网：https://www.nowcoder.com/practice/45327ae22b7b413ea21df13ee7d6429c?tpId=13&tqId=11205&tPage=3&rp=3&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 
 * 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
 */

//s, pattern都是字符串
function match(s, pattern) {
  if (s === null || pattern === null) {
    return false;
  }
  return matchCore(s, pattern, 0, 0);
}

function matchCore(s, pattern, i, j) {
  if (i === s.length && j === pattern.length) {
    return true;
  }
  if (i < s.length && j === pattern.length) {
    return false;
  }
  if (j < pattern.length - 1 && pattern[j + 1] === '*') { // 存在*
    if (s[i] === pattern[j] || (pattern[j] === '.' && i < s.length)) {
      return matchCore(s, pattern, i + 1, j + 2) || //*匹配1次
        matchCore(s, pattern, i + 1, j) || // *匹配多次
        matchCore(s, pattern, i, j + 2); // *匹配0次
    } else {
      return matchCore(s, pattern, i, j + 2); // *匹配0次;
    }
  }
  if (s[i] === pattern[j] || (pattern[j] === '.' && i < s.length)) {
    return matchCore(s, pattern, i + 1, j + 1);
  }
  return false;
}

let o = match('aaa', 'aaa*a');
console.log(o);