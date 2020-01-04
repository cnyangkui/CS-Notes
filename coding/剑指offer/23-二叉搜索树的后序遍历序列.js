// 牛客网：https://www.nowcoder.com/practice/a861533d45854474ac791d90e447bafd?tpId=13&tqId=11176&tPage=2&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */

function VerifySquenceOfBST(sequence) {
  if (sequence.length === 0) {
    return false;
  }
  if (sequence.length === 1) {
    return true;
  }
  let rootVal = sequence[sequence.length - 1];
  let leftTree = [],
    rightTree = []
  mid = 0;
  for (let i = 0; i <= sequence.length - 1; i++) {
    if (sequence[i] >= rootVal) {
      mid = i;
      break;
    }
  }
  leftTree = sequence.slice(0, mid);
  rightTree = sequence.slice(mid, sequence.length - 1);
  if (leftTree.every(d => d < rootVal) === false) {
    return false;
  }
  if (rightTree.every(d => d > rootVal) === false) {
    return false;
  }
  if (leftTree.length && rightTree.length) {
    return VerifySquenceOfBST(leftTree) && VerifySquenceOfBST(rightTree);
  }
  if (leftTree.length) {
    return VerifySquenceOfBST(leftTree);
  }
  if (rightTree.length) {
    return VerifySquenceOfBST(rightTree);
  }
  return true;
}

let o = VerifySquenceOfBST([4, 6, 7, 5]);
console.log(o);