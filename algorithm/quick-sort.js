/**
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]];
}

/**
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function partition(arr, left, right) {
  const pivot = arr[right];

  let minIndex = left - 1; // 比 pivot 小的值的前一个索引
  // left to (right - 1)
  for (let index = left; index <= right - 1; ++index) {
    if (arr[index] <= pivot) {
      minIndex += 1;
      swap(arr, index, minIndex);
    }
  }
  // 最后把 pivot 放到中间，形成左边比 pivot 小，右边比 pivot 小的情况
  swap(arr, minIndex + 1, right);
  return minIndex + 1;
}

/**
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 */
function randomizedQuickSort(arr, left, right) {
  if (left < right) {
    const midIndex = partition(arr, left, right);

    randomizedQuickSort(arr, left, midIndex - 1);
    randomizedQuickSort(arr, midIndex + 1, right);
  }
}

/**
 * @param {number[]} arr 需要排序的数组
 * @return {number[]} 排序后的数组
 */
export default function quickSort(arr = []) {
  randomizedQuickSort(arr, 0, arr.length - 1);

  return arr;
}
