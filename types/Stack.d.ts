interface Stack {
  linkedList: LinkedList;

  isEmpty(): boolean;

  size(): number;

  push(data: any): Stack;

  pop(): any;

  toString(): string;
}
