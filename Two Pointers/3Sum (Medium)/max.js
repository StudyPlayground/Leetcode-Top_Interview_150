// 1차 (PASS)
// 시간복잡도: O(N^2)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  if (nums[0] > 0 || nums[nums.length - 1] < 0) {
    return [];
  }

  const result = [];
  for (let left = 0; left < nums.length - 2; ) {
    let center = left + 1;
    let right = nums.length - 1;

    while (center < right) {
      const sum = nums[left] + nums[center] + nums[right];
      if (sum === 0) {
        result.push([nums[left], nums[center], nums[right]]);
        while (center < right && nums[center] === nums[center + 1]) {
          center += 1;
        }
        center += 1;
        while (center < right && nums[right] === nums[right - 1]) {
          right -= 1;
        }
        right -= 1;
      } else if (sum < 0) {
        center += 1;
      } else {
        right -= 1;
      }
    }

    while (nums[left] === nums[left + 1]) {
      left += 1;
    }
    left += 1;
  }

  return result;
};
