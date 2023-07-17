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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const queue = [root];
  if (root) {
    result.push([root.val]);
  }

  while (queue.length > 0) {
    let levelSize = queue.length;
    const levelResult = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.left) {
        levelResult.push(node.left.val);
        queue.push(node.left);
      }

      if (node.right) {
        levelResult.push(node.right.val);
        queue.push(node.right);
      }
    }
    if (levelResult.length > 0) {
      result.push(levelResult);
    }
  }

  return result;
};
