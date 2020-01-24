interface LinkedList {
  head: LinkedListNode;

  tail: LinkedListNode;

  append(node: any): LinkedList;

  prepend(node: any): LinkedList;

  insertAfter(prevNode: LinkedListNode, node: any): LinkedList;

  find(compareFunc: function): LinkedListNode;

  deleteHead(): LinkedListNode;

  delete(compareFunc: function): LinkedList;

  toArray(): LinkedListNode[];

  toString(): string;
}

interface LinkedListNode {
  data: any;

  prev: LinkedListNode;

  next: LinkedListNode;
}
