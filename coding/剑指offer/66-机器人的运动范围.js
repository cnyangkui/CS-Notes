// 牛客网：https://www.nowcoder.com/practice/6e5207314b5241fb83f2329e89fdecc8?tpId=13&tqId=11219&tPage=4&rp=4&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 
 * 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
 */

function movingCount(threshold, rows, cols) {
  let visited = new Array(rows * cols).fill(false);
  return movingCountCore(threshold, rows, cols, 0, 0, visited);
}

function movingCountCore(threshold, rows, cols, row, col, visited) {
  let count = 0;
  if (row >= 0 && row < rows && col >= 0 && col < cols) {
    let v = calSum(row) + calSum(col);
    if (v <= threshold && visited[row * cols + col] === false) {
      visited[row * cols + col] = true;
      count = 1 + movingCountCore(threshold, rows, cols, row, col - 1, visited) +
        movingCountCore(threshold, rows, cols, row, col + 1, visited) +
        movingCountCore(threshold, rows, cols, row - 1, col, visited) +
        movingCountCore(threshold, rows, cols, row + 1, col, visited);
    }
  }
  return count;
}

function calSum(number) {
  let sum = 0;
  while (number) {
    sum += (number % 10);
    number = ~~(number / 10);
  }
  return sum;
}

let o = movingCount(5, 5, 5);
console.log(o);