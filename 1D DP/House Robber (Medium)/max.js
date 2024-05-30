// 1차 (PASS)

// 1. 테이블 정의
// DP[index] = 현 index를 선택한 경우의 최대 총합

// 2. 점화식 찾기
// DP[index] = Math.max(DP[index - 2] + nums[index], DP[index - 3] + nums[index])

// 3. 초기값 정의하기
// DP[0] = nums[0]
// DP[1] = nums[1]
// DP[2] = Math.max(nums[2], nums[2] + nums[0])

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const LENGTH = nums.length;
  if (LENGTH === 1) {
    return nums[0];
  }
  if (LENGTH === 2) {
    return Math.max(nums[0], nums[1]);
  }

  const list = Array.from({ length: LENGTH }, () => 0);
  list[0] = nums[0];
  list[1] = nums[1];
  list[2] = Math.max(nums[2], nums[0] + nums[2]);

  for (let index = 3; index < LENGTH; index++) {
    list[index] = Math.max(
      list[index - 2] + nums[index],
      list[index - 3] + nums[index]
    );
  }

  return Math.max(list[LENGTH - 1], list[LENGTH - 2]);
};
