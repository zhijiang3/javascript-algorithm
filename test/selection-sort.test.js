import selectionSort from "../lib/selection-sort";

function sortArr(arr) {
  return arr.slice().sort((a, b) => a - b);
}

test("测试空值", () => {
  let arr;

  selectionSort(arr);
  expect(arr).toBeUndefined();

  arr = [];
  selectionSort(arr);
  expect(arr).toEqual([]);
});

test("在原数组中正确排序", () => {
  let arr, arrSorted;

  arr = [1];
  arrSorted = sortArr(arr);
  selectionSort(arr);
  expect(arr).toEqual(arrSorted);

  arr = [2, 1];
  arrSorted = sortArr(arr);
  selectionSort(arr);
  expect(arr).toEqual(arrSorted);

  arr = [1, 2, 3];
  arrSorted = sortArr(arr);
  selectionSort(arr);
  expect(arr).toEqual(arrSorted);

  arr = [3, 2, 1];
  arrSorted = sortArr(arr);
  selectionSort(arr);
  expect(arr).toEqual(arrSorted);

  arr = [141, 35, 94, 88, 61, 111];
  arrSorted = sortArr(arr);
  selectionSort(arr);
  expect(arr).toEqual(arrSorted);
});
