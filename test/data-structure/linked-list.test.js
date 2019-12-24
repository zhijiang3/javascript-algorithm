import { default as LinkedList, Node } from "../../data-structure/Linked-List";

test("测试链表基本使用", () => {
  const ll = new LinkedList();

  const headNode = new Node(1);
  ll.append(headNode);
  const tailNode = new Node(2);
  ll.append(tailNode);

  expect(ll.head).toEqual(headNode);
  expect(ll.tail).toEqual(tailNode);
  expect(ll.toString()).toEqual(`[${[1,2].join(",")}]`);
});
