// 1차 (PASS)
// 시간, 공간 복잡도 매우 높음

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) {
    return 0;
  }

  const queue = [{ index: 0, count: 0 }];
  const visited = {};

  while (queue.length > 0) {
    const { index, count } = queue.shift();
    const range = nums[index];

    for (let r = 1; r <= range; r++) {
      if (index + r === nums.length - 1) {
        return count + 1;
      }

      if (visited[index + r]) {
        continue;
      }

      queue.push({ index: index + r, count: count + 1 });
      visited[index + r] = true;
    }
  }
};
