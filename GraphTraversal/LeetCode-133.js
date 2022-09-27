// https://leetcode.com/problems/clone-graph/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
let map = {};

const traverse = (node) => {
  if (!node) return node;
  if (!map[node.val]) {
    map[node.val] = new Node(node.val);
    map[node.val].neighbors = node.neighbors.map((neighbor) => traverse(neighbor));
  }
  return map[node.val];
};

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node) => {
  map = {};
  return traverse(node);
};
