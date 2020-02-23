import { isFunc } from "shared/util";

/**
 * @param {*} val
 * @return {DoubleLinkedListNode}
 */
function normalizeNode(val) {
  if (val instanceof DoubleLinkedListNode) {
    return val;
  }

  return new DoubleLinkedListNode(val);
}

export class DoubleLinkedListNode {
  /**
   * @param {*} data
   */
  constructor(data) {
    this.data = data;

    /** @type {DoubleLinkedListNode} */
    this.prev = null;

    /** @type {DoubleLinkedListNode} */
    this.next = null;
  }
}

export default class DoubleLinkedList {
  constructor() {
    /** @type {DoubleLinkedListNode} */
    this.head = null;

    /** @type {DoubleLinkedListNode} */
    this.tail = null;
  }

  /**
   * @param {*} val
   * @return {DoubleLinkedList}
   */
  append(val) {
    if (val == null) return this;

    const node = normalizeNode(val);

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
   * @param {*} val
   * @return {DoubleLinkedList}
   */
  prepend(val) {
    if (val == null) return this;

    const node = normalizeNode(val);

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
   * @param {DoubleLinkedListNode} prevNode
   * @param {*} val
   * @return {DoubleLinkedList}
   */
  insertAfter(prevNode, val) {
    const node = normalizeNode(val);

    if (prevNode == null) return this;

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
   * @param {(val: *) => boolean} compareFunc
   * @return {DoubleLinkedListNode}
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
   * @return {DoubleLinkedListNode}
   */
  deleteHead() {
    if (this.head == null) return null;

    const deleteHead = this.head;

    this.delete(data => data === this.head.data);

    return deleteHead;
  }

  /**
   * @param {(val: *) => boolean} compareFunc
   * @return {DoubleLinkedList}
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
   * @return {DoubleLinkedListNode[]}
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
