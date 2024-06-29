// 1차 (PASS)
// 시간복잡도: O(N * logN)
// 공간복잡도: O(1)
// 정렬 후 3개씩 확인하는데 처음과 세번째가 다르면 첫번째가 한번만 등장하는 숫자이다.
// (비트 연산자 미사용)

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length; index += 3) {
    if (nums[index] !== nums[index + 2]) {
      return nums[index];
    }
  }
};
