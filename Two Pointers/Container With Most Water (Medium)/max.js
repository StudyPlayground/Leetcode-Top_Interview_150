// 1차 (PASS)
// 양 끝에 포인터를 두고
// 작은 높이를 가진 포인터를 움직인다.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;
  let [left, right] = [0, height.length - 1];

  while (left < right) {
    const w = right - left;
    const h = Math.min(height[left], height[right]);
    result = Math.max(result, w * h);

    if (height[left] < height[right]) {
      left += 1;
    } else if (height[left] > height[right]) {
      right -= 1;
    } else {
      left += 1;
      right -= 1;
    }
  }

  return result;
};
