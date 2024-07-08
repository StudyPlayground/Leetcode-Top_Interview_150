// 1차 (PASS)
// 시간복잡도: O(N)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return divideAndConquer(0, nums.length - 1);

  function divideAndConquer(leftIndex, rightIndex) {
    const centerIndex = Math.floor((leftIndex + rightIndex) / 2);
    const rootNode = new TreeNode(nums[centerIndex]);
    if (leftIndex !== centerIndex) {
      rootNode.left = divideAndConquer(leftIndex, centerIndex - 1);
    }
    if (rightIndex !== centerIndex) {
      rootNode.right = divideAndConquer(centerIndex + 1, rightIndex);
    }
    return rootNode;
  }
};
