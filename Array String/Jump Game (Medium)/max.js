// 1차 (PASS)
// 완전 탐색을 하되 Set을 이용해서 중복을 제거했습니다.
// 단점: 시간복잡도 매우 높음

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  if (nums[0] === 0) {
    return false;
  }

  const queue = [0];
  const isVisited = new Set();

  while (queue.length > 0) {
    const currentIndex = queue.shift();

    if (currentIndex === nums.length - 1) {
      return true;
    }
    if (currentIndex > nums.length - 1) {
      continue;
    }

    const range = nums[currentIndex];

    for (let r = 1; r <= range; r++) {
      if (currentIndex + r === nums.length - 1) {
        return true;
      }
      if (isVisited.has(currentIndex + r)) {
        continue;
      }
      isVisited.add(currentIndex + r);
      queue.push(currentIndex + r);
    }
  }

  return false;
};
