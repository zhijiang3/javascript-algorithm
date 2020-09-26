import { BinaryTreeNode } from "data-structure/BinaryTreeNode";

/**
 * @param {BinaryTreeNode} root
 * @param {(node: BinaryTreeNode) => void} callback
 * @description
 *  时间复杂度：O(n)
 *  空间复杂度：O(n)
 */
export function inOrderStack(root, callback) {
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    callback(root);
    root = root.right;
  }
}
