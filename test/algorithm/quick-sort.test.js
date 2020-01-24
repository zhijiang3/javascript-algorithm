import quickSort from "algorithm/quick-sort";

test("空值的情况", () => {
  expect(quickSort()).toEqual([]);
  expect(quickSort([])).toEqual([]);
  expect(quickSort([1])).toEqual([1]);
});

test("正确排序", () => {
  expect(quickSort([9, 2])).toEqual([2, 9]);
  expect(quickSort([3, 7])).toEqual([3, 7]);
  expect(quickSort([3, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("排序含有重复项的数据", () => {
  expect(quickSort([13, 13, 13, 5])).toEqual([5, 13, 13, 13]);
  expect(quickSort([6, 9, 9, 9])).toEqual([6, 9, 9, 9]);
  expect(quickSort([5, 9, 5, 2, 5, 4, 7, 3])).toEqual([2, 3, 4, 5, 5, 5, 7, 9]);
});
