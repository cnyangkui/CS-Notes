// 牛客网：https://www.nowcoder.com/practice/9b4c81a02cd34f76be2659fa0d54342a?tpId=13&tqId=11172&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

function printMatrix(matrix) {
  let left = 0,
    top = 0,
    bottom = matrix.length - 1,
    right = matrix[0].length - 1,
    i = left,
    j = top,
    array = [];
  while (left <= right && top <= bottom) {
    if (i === top && j === left) { // 矩阵左上角
      while (j <= right) {
        array.push(matrix[i][j]);
        j++;
      }
      if (top === bottom) { // 矩阵只有一行
        return array;
      }
      j = right;
    }
    if (i === top && j == right) { // 矩阵右上角
      i += 1;
      while (i <= bottom) {
        array.push(matrix[i][j]);
        i++;
      }
      if (left === right) { // 矩阵只有一列
        return array;
      }
      i = bottom;
    }
    if (i === bottom && j === right) { // 矩阵右下角
      j -= 1;
      while (j >= left) {
        array.push(matrix[i][j]);
        j--;
      }
      j = left;
    }
    if (i === bottom && j == left) { // 矩阵左下角
      i -= 1;
      while (i > top) {
        array.push(matrix[i][j]);
        i--;
      }
    }
    left += 1;
    right -= 1;
    top += 1;
    bottom -= 1;
    i = left;
    j = top;
  }
  return array;
}

let array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];
let o = printMatrix(array);
console.log(o);