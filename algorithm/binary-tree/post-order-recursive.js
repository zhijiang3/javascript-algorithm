import { BinaryTreeNode } from "data-structure/BinaryTreeNode";

/**
 * @param {BinaryTreeNode} root
 * @param {(root: BinaryTreeNode) => void} callback
 * @description
 *  时间复杂度：O(n)
 *  空间复杂度：O(n)
 */
export function postOrderRecursive(root, callback) {
  if (!root) return;

  postOrderRecursive(root.left, callback);
  postOrderRecursive(root.right, callback);
  callback(root);
}
