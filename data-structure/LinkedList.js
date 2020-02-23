import { isFunc } from "shared/util";

export class LinkedListNode {
  /**
   * @param {*} data
   */
  constructor(data) {
    this.data = data;

    /** @type {LinkedListNode} */
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    /** @type {LinkedListNode} */
    this.head = null;

    /** @type {LinkedListNode} */
    this.tail = null;
  }

  /**
   * @param {*} val
   * @return {LinkedList}
   */
  append(val) {
    const node = new LinkedListNode(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }

  /**
   * @param {*} val
   * @return {LinkedList}
   */
  prepend(val) {
    const node = new LinkedListNode(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    return this;
  }

  /**
   * @param {(data: *) => boolean} compareFunc
   * @return {LinkedListNode}
   */
  find(compareFunc) {
    if (!isFunc(compareFunc)) return null;

    let node = this.head;

    while (node && !compareFunc(node.data)) {
      node = node.next;
    }

    return node;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
    const deleteHead = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    return deleteHead;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    const deleteTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deleteTail;
    }

    let prevNode = this.head;
    while (prevNode.next && prevNode.next.next) {
      prevNode = prevNode.next;
    }

    this.tail = prevNode;
    prevNode.next = null;

    return deleteTail;
  }

  /**
   * @param {(data: *) => boolean} compareFunc
   * @return {LinkedListNode}
   */
  delete(compareFunc) {
    if (!this.head || !isFunc(compareFunc)) return null;

    let deleteNode = null;
    // 考虑多个头元素需要删除
    while (this.head && compareFunc(this.head.data)) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    let node = this.head;
    if (node) {
      // 同样需要考虑多个中间元素需要删除
      while (node.next) {
        if (compareFunc(node.next.data)) {
          deleteNode = node.next;
          // 指向下下一个节点，然后验证下下一个节点是否也需要删除
          node.next = node.next.next;
        } else {
          node = node.next;
        }
      }
    }

    // 如果尾节点也需要删，那么 node 肯定指向最后一个节点
    if (compareFunc(this.tail.data)) {
      this.tail = node;
    }

    return deleteNode;
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
    const result = [];
    let node = this.head;

    while (node) {
      result.push(node.data);

      node = node.next;
    }

    return result.join(",");
  }
}
