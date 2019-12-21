/**
 * 二分查找法
 * 通过对半的筛选快速的找出需要查找的元素
 *
 * 时间复杂度：O(log2n)
 * 空间复杂度：O(1)
 *
 * @param {Array<Number>} list 有序的数组
 * @param {Number} item 要查找的元素
 * @return {Number} 返回元素的索引，未找到时返回 -1
 */
export default function binarySearch(list = [], item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    let guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else if (guess < item) {
      low = mid + 1;
    }
  }

  return -1;
}
