import { isFunc } from "shared/util";

/**
 * @param {LinkedList} linkedList
 * @param {function} callback
 */
export function traverse(linkedList, callback) {
  let node = linkedList.head;

  while (node != null) {
    isFunc(callback) && callback(node.data);

    node = node.next;
  }
}

/**
 * @param {LinkedList} linkedList
 * @param {function} callback
 */
export function reserveTraverse(linkedList, callback) {
  let node = linkedList.tail;

  while (node != null) {
    isFunc(callback) && callback(node.data);

    node = node.prev;
  }
}
