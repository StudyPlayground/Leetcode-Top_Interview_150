// 2차 (PASS)
// 이진 탐색 활용

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = Math.floor((right + left) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (nums[middle] > target) {
            right = middle - 1;
        }
        if (nums[middle] < target) {
            left = middle + 1;
        }
    }

    return left;
};

// 1차 (PASS)
// 언어에서 제공되는 메서드만 사용

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const index = nums.findIndex(num => num >= target);
    return index === -1 ? nums.length : index;
};