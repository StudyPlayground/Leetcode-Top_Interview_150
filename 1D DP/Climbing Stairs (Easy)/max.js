// 1차 (PASS)

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const list = Array.from({ length: n + 1 }, () => 1);

  for (let index = 2; index <= n; index++) {
    list[index] = list[index - 1] + list[index - 2];
  }

  return list[n];
};
