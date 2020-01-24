interface Queue {
  linkedList: LinkedList;

  isEmpty(): boolean;

  enqueue(data: any): void;

  dequeue(): any;

  toString(): string;
}
