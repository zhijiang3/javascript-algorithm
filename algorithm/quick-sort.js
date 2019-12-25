/**
 * 快速排序
 *
 * 时间复杂度：
 * 空间复杂度：
 *
 * @param {Array<Number>} arr 需要排序的数组
 * @return {Array<Number>} 排序后的数组
 */
export default function quickSort(arr = []) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const less = [], greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      greater.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}
