import { isFunc } from "shared/util";
import LinkedList from "data-structure/LinkedList";

/**
 * @param {LinkedList} linkedList
 * @param {(data: *) => void} callback
 */
export function traverse(linkedList, callback) {
  let node = linkedList.head;

  while (node != null) {
    isFunc(callback) && callback(node.data);

    node = node.next;
  }
}

/**
 * @param {LinkedListNode} node
 * @param {(data: *) => void} callback
 */
function reserveTraverseHelper(node, callback) {
  if (!node) return;

  reserveTraverseHelper(node.next, callback);

  callback(node.data);
}

/**
 * @param {LinkedList} linkedList
 * @param {(data: *) => void} callback
 */
export function reserveTraverse(linkedList, callback) {
  reserveTraverseHelper(linkedList.head, callback);
}
