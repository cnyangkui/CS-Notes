// 牛客网：https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e?tpId=13&tqId=11154&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

// 方法1：从左下角开始，当前元素比target大就往上走，比target小就往右走
function find(target, array) {
  let rowNum = array.length,
    colNum = array[0].length;
  if (target < array[0][0] || target > array[rowNum - 1][colNum - 1]) {
    return false;
  }
  let i = rowNum - 1,
    j = 0; // 指针指向二维数组左下角元素
  // 如果指向的当前数组元素比target大，就往上走；比target小，就往右走
  while (i >= 0 && j < colNum) {
    if (array[i][j] > target) {
      i--;
    } else if (array[i][j] < target) {
      j++;
    } else {
      return true;
    }
  }
  return false;
}

// 方法2：利用二分查找法
function find2() {
  let rowNum = array.length,
    colNum = array[0].length;
  if (target < array[0][0] || target > array[rowNum - 1][colNum - 1]) {
    return false;
  }
  for (let i = 0; i < rowNum; i++) {
    let low = 0,
      high = array[i].length - 1;
    while (low <= high) {
      mid = ~~((low + high) / 2);
      if (array[i][mid] > target) {
        high = mid - 1;
      } else if (array[i][mid] < target) {
        low = mid + 1;
      } else {
        return true;
      }
    }
  }
  return false;
}

array = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
];
target = 5;
o = find2(target, array);
console.log(o);