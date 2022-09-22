// https://leetcode.com/problems/maximum-depth-of-binary-tree/

const dfs = (node) => {
  if (!node?.left && !node?.right) {
    return 1;
  }
  return Math.max(dfs(node.left), dfs(node.right)) + 1;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) return 0;
  return dfs(root);
};
