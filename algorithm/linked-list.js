import { isFunc } from "../shared/util";

export function traverse(linkedList, callback) {
  let node = linkedList.head;

  while (node != null) {
    isFunc(callback) && callback(node.data);

    node = node.next;
  }
}

export function reserveTraverse(linkedList, callback) {
  let node = linkedList.tail

  while (node != null) {
    isFunc(callback) && callback(node.data);

    node = node.prev;
  }
}
