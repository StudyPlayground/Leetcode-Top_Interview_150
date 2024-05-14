// 2차 (PASS)
// 시간복잡도 O(n)
// 공간복잡도 O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let candidate = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (candidate === num) {
      count += 1;
    } else if (candidate !== num) {
      if (count === 0) {
        candidate = num;
      } else {
        count -= 1;
      }
    }
  }

  return candidate;
};

// 1차 (PASS)
// 시간복잡도 O(n * logn)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
