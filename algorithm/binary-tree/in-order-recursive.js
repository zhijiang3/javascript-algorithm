import { BinaryTreeNode } from "data-structure/BinaryTreeNode";

/**
 * @param {BinaryTreeNode} root
 * @param {(root: BinaryTreeNode) => void} callback
 * @description
 *  时间复杂度：O(n)
 *  空间复杂度：O(n)
 */
export function inOrderRecursive(root, callback) {
  if (!root) return;

  inOrderRecursive(root.left, callback);
  callback(root);
  inOrderRecursive(root.right, callback);
}
