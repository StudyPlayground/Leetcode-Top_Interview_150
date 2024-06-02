// 1차 (PASS)

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sumNumber = numbers[left] + numbers[right];
    if (sumNumber === target) {
      return [left + 1, right + 1];
    }

    if (sumNumber < target) {
      left++;
    }
    if (sumNumber > target) {
      right--;
    }
  }
};
