// https://leetcode.com/problems/same-tree/

const dfs = (node) => {
  let str = '';
  if (!node.left && !node.right) {
    return node.val;
  }
  
  str += node.val;
  str += node.left ? dfs(node.left) : ' ';
  str += node.right ? dfs(node.right) : ' ';
  
  return str;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

TreeNode.prototype.toString = function() {
  return dfs(this);
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  
  return p.toString() === q.toString();
}
