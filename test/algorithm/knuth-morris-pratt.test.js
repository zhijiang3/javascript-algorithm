import knuthMorrisPratt from "algorithm/knuth-morris-pratt";

test("不匹配的串", () => {
  expect(knuthMorrisPratt("aaaaab", "aac")).toBe(-1);
  expect(knuthMorrisPratt("abcdefg", "hijk")).toBe(-1);
});

test("空串", () => {
  expect(knuthMorrisPratt("aaaaab", "")).toBe(0);
});

test("匹配开头的串", () => {
  expect(knuthMorrisPratt("abcdefghijkl", "abcd")).toBe(0);
});

test("匹配中间的串", () => {
  expect(knuthMorrisPratt("abcdefghijkl", "efgh")).toBe(4);
});

test("匹配结尾的串", () => {
  expect(knuthMorrisPratt("abcdefghijkl", "ijkl")).toBe(8);
});
