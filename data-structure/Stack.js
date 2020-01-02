import LinkedList from './Linked-List';
import { traverse } from '../algorithm/linked-list';

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return this.linkedList.head == null;
  }

  size() {
    let count = 0;

    traverse(this.linkedList, () => {
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

    this.linkedList.deleteHead();

    return nodeHead ? nodeHead.data : null;
  }

  toString() {
    return this.linkedList.toString();
  }
}
