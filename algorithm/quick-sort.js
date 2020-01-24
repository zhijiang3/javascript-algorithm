/**
 * @param {number[]} arr 需要排序的数组
 * @return {number[]} 排序后的数组
 */
export default function quickSort(arr = []) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      greater.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}
