// 牛客网：https://www.nowcoder.com/practice/623a5ac0ea5b4e5f95552655361ae0a8?tpId=13&tqId=11203&tPage=3&rp=3&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。
 *  例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
 */

// 方法1：使用哈希表
function duplicate(numbers, duplication) {
  //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
  //函数返回True/False
  let map = {}, flag = false;
  for (let i = 0; i < numbers.length; i++) {
    if (!map[numbers[i]]) {
      map[numbers[i]] = 1;
    } else {
      duplication[0] = numbers[i];
      flag = true;
      break;
    }
  }
  return flag;
}

// 方法2
function duplicate2(numbers, duplication) {
  for (let i = 0; i < numbers.length; i++) {
    while (numbers[i] !== i) {
      if (numbers[i] === numbers[numbers[i]]) {
        duplication[0] = numbers[i];
        return true;
      }
      let tmp = numbers[i];
      numbers[i] = numbers[tmp];
      numbers[tmp] = tmp;
    }
  }
  return false;
}

let array = [2, 3, 1, 0, 2, 5, 3];
let o = duplicate2(array, new Array());
console.log(o);
