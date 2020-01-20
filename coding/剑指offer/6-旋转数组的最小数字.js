// 牛客网：https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba?tpId=13&tqId=11159&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
 * NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */

// 二分查找法的思想
function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length === 0) {
    return 0;
  }
  let low = 0,
    high = rotateArray.length - 1,
    min = rotateArray[0];
  while (low <= high) {
    let mid = ~~((low + high) / 2);
    if (rotateArray[mid] < min) {
      min = rotateArray[mid];
      high = mid - 1;
    } else if (rotateArray[mid] > min) {
      low = mid + 1;
    } else { // 中间值与第一个元素相等时，需要遍历。特例：[1,0,1,1,1], [1,1,1,0,1]
      for (let i = 1; i < rotateArray.length; i++) {
        if (rotateArray[i] < min) {
          min = rotateArray[i];
        }
      }
      break;
    }
  }
  return min;
}

let array = [7, 8, 9, 1, 2, 3, 4, 5];
let o = minNumberInRotateArray(array);
console.log(o);