// 牛客网：https://www.nowcoder.com/practice/9b4c81a02cd34f76be2659fa0d54342a?tpId=13&tqId=11172&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

function printMatrix(matrix) {
  let left = 0,
    top = 0,
    bottom = matrix.length - 1,
    right = matrix[0].length - 1,
    i = left,
    j = top,
    array = [];
  if (left === right && top === bottom) {
    array.push(matrix[top][left]);
    return array;
  }
  while (left <= right && top <= bottom) {
    if (i === top && j === left) {
      while (j < right) {
        array.push(matrix[i][j]);
        j++;
      }
    }
    if (i === top && j == right) {
      while (i < bottom) {
        array.push(matrix[i][j]);
        i++;
      }
    }
    if (i === bottom && j === right) {
      while (j > left) {
        array.push(matrix[i][j]);
        j--;
      }
    }
    if (i === bottom && j == left) {
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
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
let o = printMatrix(array);
console.log(o);