/**
 * 选择排序
 *
 * 时间复杂度：O(n^2)
 * 空间复杂度：
 *
 * @param {Array<Number>} arr 待排序的数组
 */
export default function selectionSort(arr = []) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    // swap min, i
    if (min !== i) {
      arr[min] = arr[min] ^ arr[i];
      arr[i] = arr[min] ^ arr[i];
      arr[min] = arr[min] ^ arr[i];
    }
  }
}
