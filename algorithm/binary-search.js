/**
 * @param {number[]} list 有序的数组
 * @param {number} item 要查找的元素
 * @return {number} 返回元素的索引，未找到时返回 -1
 */
export default function binarySearch(list = [], item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess > item) {
      high = mid - 1;
    } else if (guess < item) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
