import LinkedList from "data-structure/LinkedList";
import { traverse } from "algorithm/linked-list";

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.linkedList.head == null;
  }

  /**
   * @return {number}
   */
  size() {
    let count = 0;

    traverse(this.linkedList, () => {
      count++;
    });

    return count;
  }

  /**
   * @param {*} data
   * @return {Stack}
   */
  push(data) {
    this.linkedList.prepend(data);

    return this;
  }

  /**
   * @return {*}
   */
  pop() {
    const nodeHead = this.linkedList.deleteHead();

    return nodeHead ? nodeHead.data : null;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.linkedList.toString();
  }
}
