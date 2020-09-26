import { BinaryTreeNode } from "data-structure/BinaryTreeNode";

/**
 * @param {BinaryTreeNode} root
 * @param {(root: BinaryTreeNode) => void} callback
 * @description
 *  时间复杂度：O(n)
 *  空间复杂度：O(n)
 */
export function preOrderRecursive(root, callback) {
  if (!root) return;

  callback(root);
  preOrderRecursive(root.left, callback);
  preOrderRecursive(root.right, callback);
}
