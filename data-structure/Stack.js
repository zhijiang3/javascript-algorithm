import { default as LinkedList } from './Linked-List';

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    let count = 0;

    this.linkedList.traverse(() => {
      count++;
    });

    return count;
  }

  push(data) {
    this.linkedList.prepend(data);

    return this;
  }

  pop() {
    const nodeHead = this.linkedList.head;
    this.linkedList.delete(node => node === this.linkedList.head);

    return nodeHead ? nodeHead.data : null;
  }
}
