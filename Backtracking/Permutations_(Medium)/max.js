// 1차 (PASS)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    for (let startIndex = 0; startIndex < nums.length; startIndex++) {
        backtracking([nums[startIndex]]);
    }

    return result;
    
    function backtracking (subResult) {
        if (subResult.length === nums.length) {
            result.push(subResult);
            return;
        }
        for (let index = 0; index < nums.length; index++) {
            if (subResult.includes(nums[index])) {
                continue;
            }
            backtracking([...subResult, nums[index]])
        }
    }    
};