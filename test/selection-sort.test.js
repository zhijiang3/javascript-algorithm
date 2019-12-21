import selectionSort from '../lib/selection-sort';

test("在原数组中正确排序", () => {
  let arr, arrSorted;

  arr = [1, 2, 3];
  arrSorted = arr.slice().sort((a, b) => a - b);
  selectionSort(arr);
  expect(arr).toEqual(arrSorted);

  arr = [3, 2, 1];
  arrSorted = arr.slice().sort((a, b) => a - b);
  selectionSort(arr);
  expect(arr).toEqual(arrSorted);

  arr = [141, 35, 94, 88, 61, 111];
  arrSorted = arr.slice().sort((a, b) => a - b);
  selectionSort(arr);
  expect(arr).toEqual(arrSorted);
});
