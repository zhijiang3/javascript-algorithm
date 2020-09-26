import { BinaryTreeNode } from "data-structure/BinaryTreeNode";

/**
 * @param {BinaryTreeNode} root
 * @param {(node: BinaryTreeNode) => void} callback
 * @description
 *  时间复杂度：O(n)
 *  空间复杂度：O(1)
 */
export function inOrderMorris(root, callback) {
  let curr = root;
  /** @type BinaryTreeNode */
  let prev = null;

  while (curr) {
    if (curr.left === null) {
      // 如果左节点没有，直接访问右节点
      callback(curr);
      curr = curr.right;
    } else {
      prev = curr.left;
      while (prev.right && prev.right !== curr) prev = prev.right;

      if (!prev.right) {
        prev.right = curr; // 为最后遍历的节点设置一个返回上层的指针
        curr = curr.left; // 访问当前的左节点
      } else {
        // 如果再一次进入，此时，curr指向的是上一层
        // 清理返回上层的指针
        prev.right = null;
        callback(curr); // 访问当前节点
        curr = curr.right; // 继续遍历节点的上一层
      }
    }
  }
}
