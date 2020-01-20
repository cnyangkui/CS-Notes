// 牛客网：https://www.nowcoder.com/practice/c61c6999eecb4b8f88a98f66b273a3cc?tpId=13&tqId=11218&tPage=4&rp=4&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 题目描述
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
 * 如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 
 * 例如 a b c e s f c s a d e e 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，
 * 因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入格子。
 */

//  回溯法
function hasPath(matrix, rows, cols, path) {
  let visited = new Array(rows * cols).fill(false), pathLength = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (hasPathCore(matrix, rows, cols, i, j, path, pathLength, visited)) {
        return true;
      }
    }
  }
  return false;
}

function hasPathCore(matrix, rows, cols, row, col, path, pathLength, visited) {
  if (pathLength >= path.length) {
    return true;
  }
  let hasPath = false;
  if (row >= 0 && row < rows && col >= 0 && col < cols && matrix[row * cols + col] === path[pathLength] && visited[row * cols + col] === false) {
    pathLength++;
    visited[row * cols + col] = true;
    hasPath = hasPathCore(matrix, rows, cols, row, col - 1, path, pathLength, visited) ||
      hasPathCore(matrix, rows, cols, row, col + 1, path, pathLength, visited) ||
      hasPathCore(matrix, rows, cols, row - 1, col, path, pathLength, visited) ||
      hasPathCore(matrix, rows, cols, row + 1, col, path, pathLength, visited);
    if (!hasPath) {
      pathLength--;
      visited[row * cols + col] = false;
    }
  }
  return hasPath;
}

let matrix = ['a', 'b', 'c', 'e', 's', 'f', 'c', 's', 'a', 'd', 'e', 'e'];
let rows = 3, cols = 4;
let path = 'ab';
let o = hasPath(matrix, rows, cols, path);
console.log(o);