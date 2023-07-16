/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true; // if both p and q are null, return true
  if (!p || !q) return false; // if either p or q are null(but not both), return false
  if (p.val !== q.val) return false; // if the values of the p and q are different, return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/**
 * 시간 복잡도 : O(N)
 * 공간 복잡도 : O(H)
 */
