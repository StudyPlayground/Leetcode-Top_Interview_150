// 1차 (PASS)
// 시간복잡도: O(N)
// 공간복잡도: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((total, current) => total ^ current);
};
