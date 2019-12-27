import { default as LinkedList, Node } from "../../data-structure/Linked-List";

function printList(list) {
  return list.toString();
}

function printListRight(list) {
  const arr = [];

  list.traverseRight(node => {
    arr.push(node.data);
  });

  return arr.join(",");
}

describe("空值", () => {
  const list = new LinkedList();

  test("初始化", () => {
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test("在链表尾部追加", () => {
    list.append();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test("在链表头部追加", () => {
    list.prepend();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test("删除", () => {
    list.delete();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test("在链表中插入节点", () => {
    list.insertAfter();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    list.insertAfter(new Node(1), 1);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });
});

describe("在尾部追加链表", () => {
  const list = new LinkedList();

  test("追加单个节点，并且指向正确", () => {
    list.append(1).append(2);
    expect(printList(list)).toBe("1,2");
    expect(printListRight(list)).toBe("2,1");
  });

  test("连接两个链表，并且指向正确", () => {
    const appendList = new LinkedList().append(3).append(4);
    list.append(appendList.head);
    expect(printList(list)).toBe("1,2,3,4");
    expect(printListRight(list)).toBe("4,3,2,1");
  });
});

describe("在头部追加链表", () => {
  const list = new LinkedList();

  test("追加单个节点，并且指向正确", () => {
    list.prepend(4).prepend(3);

    expect(printList(list)).toBe("3,4");
    expect(printListRight(list)).toBe("4,3");
  });

  test("连接两个链表，并且指向正确", () => {
    const prependList = new LinkedList().prepend(2).prepend(1);
    list.prepend(prependList.tail);
    expect(printList(list)).toBe("1,2,3,4");
    expect(printListRight(list)).toBe("4,3,2,1");
  });
});

describe("在链表中添加节点", () => {
  const list = new LinkedList().append(3).prepend(1);

  test("在链表头部添加", () => {
    list.insertAfter(list.head, 2);
    expect(printList(list)).toBe("1,2,3");
    expect(printListRight(list)).toBe("3,2,1");
  });

  test("在链表中间添加一个链表，并且指向正确", () => {
    const insertAfterList = new LinkedList().append(5).append(6);
    list.insertAfter(list.find(node => node.data === 2), insertAfterList.head);
    expect(printList(list)).toBe("1,2,5,6,3");
    expect(printListRight(list)).toBe("3,6,5,2,1");
  });

  test("在链表尾部添加", () => {
    const insertAfterList = new LinkedList().prepend(8).prepend(7);
    list.insertAfter(list.tail, insertAfterList.head);
    expect(printList(list)).toBe("1,2,5,6,3,7,8");
    expect(printListRight(list)).toBe("8,7,3,6,5,2,1");
  });
});

describe("删除节点", () => {
  const list = new LinkedList();

  test("删除只有一个节点的链表", () => {
    list.append(1);
    list.delete(node => node.data === 1);
    expect(printList(list)).toBe("");
    expect(printListRight(list)).toBe("");
  });

  test("删除头节点", () => {
    list.prepend(1).append(2).append(3);
    list.delete(node => node.data === 1);
    expect(printList(list)).toBe("2,3");
    expect(printListRight(list)).toBe("3,2");
  });

  test("删除尾节点", () => {
    list.prepend(1);
    list.delete(node => node.data === 3);
    expect(printList(list)).toBe("1,2");
    expect(printListRight(list)).toBe("2,1");
  });

  test("删除中间节点", () => {
    list.append(3);
    list.delete(node => node.data === 2);
    expect(printList(list)).toBe("1,3");
    expect(printListRight(list)).toBe("3,1");
  });
});
