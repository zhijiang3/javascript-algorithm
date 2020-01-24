import LinkedList from "data-structure/Linked-List";

export default class Queue {
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
   * @param {*} data
   */
  enqueue(data) {
    this.linkedList.append(data);
  }

  /**
   * @return {*}
   */
  dequeue() {
    const headNode = this.linkedList.deleteHead();

    return headNode ? headNode.data : null;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.linkedList.toString();
  }
}
