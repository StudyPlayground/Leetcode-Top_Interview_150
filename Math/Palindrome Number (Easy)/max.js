// 2차 제출 (PASS)
// 시간복잡도 감소
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const S = x.toString();
  const REVERSED_S = S.split("").reverse().join("");

  return S === REVERSED_S;
};

// 1차 제출 (PASS)
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const S = x.toString();
  const LENGTH = S.length;

  for (let i = 0; i < Math.floor(LENGTH / 2); i++) {
    if (S[i] !== S[LENGTH - i - 1]) {
      return false;
    }
  }

  return true;
};
