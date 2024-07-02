// 2차 (PASS)
// 시간복잡도: O(N)
// 공간복잡도: O(1)

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (nums.find((num) => target <= num)) {
    return 1;
  }

  if (nums.length === 1) {
    return 0;
  }

  let result = nums.length;
  let left = 0;
  let right = 1;
  let subSum = nums[0];

  while (right <= nums.length) {
    if (subSum >= target) {
      result = Math.min(result, right - left);
      subSum -= nums[left];
      left += 1;
    } else {
      subSum += nums[right];
      right += 1;
    }
  }

  return left === 0 ? 0 : result;
};

// 1차 (PASS)
// 시간복잡도: O(N)
// 공간복잡도: O(N)

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (nums.find((num) => target <= num)) {
    return 1;
  }

  if (nums.length === 1) {
    return 0;
  }

  let result = nums.length;
  let left = 0;
  let right = 1;
  const accumulatedNums = [0, ...nums];
  for (let index = 0; index < accumulatedNums.length - 1; index++) {
    accumulatedNums[index + 1] += accumulatedNums[index];
  }

  while (right < accumulatedNums.length) {
    const sum = accumulatedNums[right] - accumulatedNums[left];
    if (sum >= target) {
      result = Math.min(result, right - left);
      left += 1;
    }
    if (sum < target) {
      right += 1;
    }
  }

  return left === 0 ? 0 : result;
};
