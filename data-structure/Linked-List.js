export class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function isFunc(fn) {
  return typeof fn === "function";
}

export default class LinkedList {
  static normalizeNode(node) {
    if (!node instanceof Node) {
      return new Node(node);
    }

    return node;
  }

  constructor(node) {
    node = LinkedList.normalizeNode(node);

    this.head = node;
    this.tail = node;
  }

  append(node) {
    node = LinkedList.normalizeNode(node);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  prepend(node) {
    node = LinkedList.normalizeNode(node);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  find(iterator) {
    let node = this.head;

    while (node) {
      if (isFunc(iterator) && iterator(node) === 0) {
        return node;
      }

      node = node.next;
    }
  }

  delete(compareFunction) {
    const node = this.find(compareFunction);

    if (!node) return;

    if (this.head === node) {
      if (this.tail === node) {
        this.head = this.tail = null;
      } else {
        this.head = node.next;
        node.next = null;
      }
    } else if (this.tail === node) {
      this.tail = node.prev;
      node.prev = null;
    } else {
      const next = node.next;
      node.data = next.data;
      node.next = next.next;
      next.prev = next.next = null;
    }
  }

  travel(iterator) {
    let node = this.head;

    while (node) {
      isFunc(iterator) && iterator(node);

      node = node.next;
    }
  }

  toString() {
    const result = [];

    this.travel(node => {
      result.push(node.data);
    });

    return `[${result.join(",")}]`;
  }
}
