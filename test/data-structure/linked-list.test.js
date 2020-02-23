import { default as LinkedList } from "data-structure/LinkedList";

test("创建空链表", () => {
  const linkedList = new LinkedList();

  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
  expect(linkedList.toString()).toBe("");
});

test("在链表末尾添加内容", () => {
  const linkedList = new LinkedList();

  linkedList.append(1).append(2);

  expect(linkedList.head.data).toBe(1);
  expect(linkedList.tail.data).toBe(2);
  expect(linkedList.toString()).toBe("1,2");
});

test("在链表开头添加内容", () => {
  const linkedList = new LinkedList();

  linkedList.prepend(2).prepend(1);

  expect(linkedList.head.data).toBe(1);
  expect(linkedList.tail.data).toBe(2);
  expect(linkedList.toString()).toBe("1,2");
});

test("删除链表指定节点", () => {
  const linkedList = new LinkedList();

  linkedList
    .append(1)
    .append(2)
    .append(3)
    .append(3)
    .append(3);

  expect(linkedList.head.data).toBe(1);
  expect(linkedList.tail.data).toBe(3);
  expect(linkedList.toString()).toBe("1,2,3,3,3");

  const deleteNode = linkedList.delete(val => val === 3);

  expect(deleteNode.data).toBe(3);
  expect(linkedList.head.data).toBe(1);
  expect(linkedList.tail.data).toBe(2);
  expect(linkedList.toString()).toBe("1,2");

  const deleteNode2 = linkedList.delete(val => val === 2 || val === 1);

  expect(deleteNode2.data).toBe(2);
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
  expect(linkedList.toString()).toBe("");
});

test("删除链表尾节点", () => {
  const linkedList = new LinkedList();

  linkedList.append(1).append(2);

  expect(linkedList.head.data).toBe(1);
  expect(linkedList.tail.data).toBe(2);

  const deleteNode = linkedList.deleteTail();

  expect(deleteNode.data).toBe(2);
  expect(linkedList.head.data).toBe(1);
  expect(linkedList.tail.data).toBe(1);
  expect(linkedList.toString()).toBe("1");

  const deleteNode2 = linkedList.deleteTail();

  expect(deleteNode2.data).toBe(1);
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
  expect(linkedList.toString()).toBe("");
});

test("删除链表头节点", () => {
  const linkedList = new LinkedList();

  linkedList.prepend(2).prepend(1);

  expect(linkedList.head.data).toBe(1);
  expect(linkedList.tail.data).toBe(2);

  const deleteNode = linkedList.deleteHead();

  expect(deleteNode.data).toBe(1);
  expect(linkedList.head.data).toBe(2);
  expect(linkedList.tail.data).toBe(2);
  expect(linkedList.toString()).toBe("2");

  const deleteNode2 = linkedList.deleteTail();

  expect(deleteNode2.data).toBe(2);
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
  expect(linkedList.toString()).toBe("");
});
