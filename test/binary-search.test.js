import binarySearch from "../lib/binary-search";

test("查找不存在的元素", () => {
  expect(binarySearch([1, 2, 3, 4], 5)).toBe(-1);
  expect(binarySearch([], 3)).toBe(-1);
  expect(binarySearch([])).toBe(-1);
  expect(binarySearch()).toBe(-1);
});

test("查找存在的元素", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
});
