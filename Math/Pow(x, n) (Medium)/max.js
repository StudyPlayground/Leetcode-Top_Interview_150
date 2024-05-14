// 1차 제출 (PASS)
// 로직 참고해서 풀었습니다.
// https://eunjinii.tistory.com/113
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  return getPow(x, n);

  function getPow(x, n) {
    if (x === 1 || n === 0) {
      return 1;
    }

    if (n === 1) {
      return x;
    }

    if (n % 2 === 0) {
      const result = getPow(x, n / 2);
      return result * result;
    } else {
      const result = getPow(x, (n - 1) / 2);
      return result * result * x;
    }
  }
};
