import { traverse, reserveTraverse } from "algorithm/linked-list";
import LinkedList from "data-structure/LinkedList";

test("正向遍历", () => {
  const linkedList = new LinkedList();

  linkedList
    .append(1)
    .append(2)
    .append(3);

  const result = [];

  traverse(linkedList, val => {
    result.push(val);
  });

  expect(result).toEqual([1, 2, 3]);
});

test("反向遍历", () => {
  const linkedList = new LinkedList();

  linkedList
    .append(1)
    .append(2)
    .append(3);

  const result = [];

  reserveTraverse(linkedList, val => {
    result.push(val);
  });

  expect(result).toEqual([3, 2, 1]);
});
