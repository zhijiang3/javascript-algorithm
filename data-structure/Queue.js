import LinkedList from "./Linked-List";

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return this.linkedList.head == null;
  }

  enqueue(data) {
    this.linkedList.append(data);
  }

  dequeue() {
    const headNode = this.linkedList.head;
    this.linkedList.delete(node => node === this.linkedList.head);

    return headNode ? headNode.data : null;
  }

  toString() {
    return this.linkedList.toString();
  }
}
