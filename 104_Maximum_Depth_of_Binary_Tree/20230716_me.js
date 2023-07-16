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
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

/**
 * 이진트리의 깊이를 계산할 때 말단 노드에 도달하면 1을 반환하고 이전 노드로 돌아갈 때마다 1이 더해진다.
 *
 * 시간 복잡도 : 이진 트리의 노드 수가 n일 때 O(n)의 시간 복잡도
 * 공간 복잡도 : 재귀 호출에 필요한 스택공간을 사용하므로 O(h)의 공간 복잡도
 */
