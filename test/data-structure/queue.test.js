import Queue from "../../data-structure/Queue";

test("创建空队列", () => {
  const queue = new Queue();

  expect(queue).not.toBeNull();
  expect(queue.linkedList).not.toBeNull();
});

test("数据入队", () => {
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.toString()).toBe("1,2");
});

test("检查队列空值", () => {
  const queue = new Queue();

  expect(queue.isEmpty()).toBe(true);

  queue.enqueue(1);

  expect(queue.isEmpty()).toBe(false);
});

test("数据出队", () => {
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);
  expect(queue.dequeue()).toBeNull();
  expect(queue.isEmpty()).toBe(true);
});
