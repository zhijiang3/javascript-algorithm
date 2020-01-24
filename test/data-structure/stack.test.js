import Stack from "data-structure/Stack";

test("创建空栈堆", () => {
  const stack = new Stack();

  expect(stack).not.toBeNull();
  expect(stack.linkedList).not.toBeNull();
});

test("把数据压入栈", () => {
  const stack = new Stack();

  stack.push(1);
  stack.push(2);

  expect(stack.toString()).toBe("2,1");
});

test("检查是否空的栈", () => {
  const stack = new Stack();

  expect(stack.isEmpty()).toBe(true);

  stack.push(1);

  expect(stack.isEmpty()).toBe(false);
});

test("检查栈的大小", () => {
  const stack = new Stack();

  expect(stack.size()).toBe(0);

  stack.push(1);
  stack.push(2);

  expect(stack.size()).toBe(2);
});

test("从栈里弹出数据", () => {
  const stack = new Stack();

  stack.push(1);
  stack.push(2);

  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(1);
  expect(stack.pop()).toBeNull();
  expect(stack.isEmpty()).toBe(true);
  expect(stack.size()).toBe(0);
});
