interface DoubleLinkedList {
  head: DoubleLinkedListNode;

  tail: DoubleLinkedListNode;

  append(node: any): DoubleLinkedList;

  prepend(node: any): DoubleLinkedList;

  insertAfter(prevNode: DoubleLinkedListNode, node: any): DoubleLinkedList;

  find(compareFunc: function): DoubleLinkedListNode;

  deleteHead(): DoubleLinkedListNode;

  delete(compareFunc: function): DoubleLinkedList;

  toArray(): DoubleLinkedListNode[];

  toString(): string;
}

interface DoubleLinkedListNode {
  data: any;

  prev: DoubleLinkedListNode;

  next: DoubleLinkedListNode;
}
