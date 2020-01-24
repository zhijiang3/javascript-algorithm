import { isFunc } from "shared/util";

export class Node {
  /**
   * @param {*} data
   */
  constructor(data) {
    this.data = data;

    /** @var {LinkedListNode} */
    this.prev = null;

    /** @var {LinkedListNode} */
    this.next = null;
  }
}

export default class LinkedList {
  /**
   * @param {*} node
   * @return {LinkedListNode}
   */
  static normalizeNode(node) {
    if (!(node instanceof Node)) {
      return new Node(node);
    }

    return node;
  }

  constructor() {
    /** @var {LinkedListNode} */
    this.head = null;

    /** @var {LinkedListNode} */
    this.tail = null;
  }

  /**
   * @param {*} node
   * @return {LinkedList}
   */
  append(node) {
    if (node == null) return this;

    node = LinkedList.normalizeNode(node);

    // update head pointer
    if (this.head == null) {
      this.head = node;
    }

    // update tail node pointer
    node.prev = this.tail;
    if (this.tail != null) {
      this.tail.next = node;
    } else {
      this.tail = node;
    }

    // update tail pointer
    // It maybe append a linked list,
    // so we need to find the last node.
    let tail = this.tail;
    while (tail.next) {
      tail = tail.next;
    }
    this.tail = tail;

    return this;
  }

  /**
   * @param {*} node
   * @return {LinkedList}
   */
  prepend(node) {
    if (node == null) return this;

    node = LinkedList.normalizeNode(node);

    // update tail pointer
    if (this.tail == null) {
      this.tail = node;
    }

    // update head node pointer
    node.next = this.head;
    if (this.head != null) {
      this.head.prev = node;
    } else {
      this.head = node;
    }

    // update head pointer
    // It maybe prepend a linked list,
    // so we need to find the first node.
    let head = this.head;
    while (head.prev) {
      head = head.prev;
    }
    this.head = head;

    return this;
  }

  /**
   * @param {LinkedListNode} prevNode
   * @param {*} node
   * @return {LinkedList}
   */
  insertAfter(prevNode, node) {
    node = LinkedList.normalizeNode(node);

    if (prevNode == null) {
      console.warn("LinkedList: The previous node cannot be null.");
      return this;
    }

    // we find the last node for "node"
    // and update next pointer for the last node
    let nodeNext = node;
    while (nodeNext.next != null) {
      nodeNext = nodeNext.next;
    }
    nodeNext.next = prevNode.next;

    // and then we linked previous node and node.
    prevNode.next = node;
    node.prev = prevNode;

    // if last node for "node" have next pointer
    // and we fix it.
    if (nodeNext.next) {
      nodeNext.next.prev = nodeNext;
    }

    // update tail pointer
    // It maybe insert a linked list,
    // so we need to find the last node.
    let tail = this.tail;
    while (tail != null && tail.next != null) {
      tail = tail.next;
    }
    this.tail = tail;

    return this;
  }

  /**
   * @param {Function} compareFunc
   * @return {(LinkedListNode|null)}
   */
  find(compareFunc) {
    let node = this.head;

    while (node) {
      if (isFunc(compareFunc) && compareFunc(node.data)) {
        return node;
      }

      node = node.next;
    }
  }

  /**
   * @return {(LinkedListNode|null)}
   */
  deleteHead() {
    if (this.head == null) return null;

    const deleteHead = this.head;

    this.delete(data => data === this.head.data);

    return deleteHead;
  }

  /**
   * @param {Function} compareFunc
   * @return {LinkedList}
   */
  delete(compareFunc) {
    const node = this.find(compareFunc);

    if (!node) return this;

    // update prev node and next node pointer
    if (node.next) node.next.prev = node.prev;
    if (node.prev) node.prev.next = node.next;

    // update head and tail pointer
    if (this.head === node) this.head = node.next;
    if (this.tail === node) this.tail = node.prev;

    // clear delete node pointer
    node.prev = node.next = null;

    return this;
  }

  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    const result = [];
    let node = this.head;

    while (node) {
      result.push(node);

      node = node.next;
    }

    return result;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.toArray()
      .map(node => node.data)
      .join(",");
  }
}
