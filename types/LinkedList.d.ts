interface LinkedList {
  head: LinkedListNode;

  tail: LinkedListNode;

  append(val: any): LinkedList;

  prepend(val: any): LinkedList;

  find(compareFunc: function): LinkedListNode;

  deleteHead(): LinkedListNode;

  deleteTail(): LinkedListNode;

  delete(compareFunc: function): LinkedListNode;

  toArray(): LinkedListNode[];

  toString(): string;
}

interface LinkedListNode {
  data: any;

  next: LinkedListNode;
}
