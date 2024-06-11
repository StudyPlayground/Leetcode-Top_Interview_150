// 1차 (PASS)
// 시간, 공간 복잡도 모두 중간 이상 성능

// 참고: 간단한 로직
// 2개의 포인터(s, t)를 가지고
// 각 포인터의 값이 동일하면 s, t 포인터 1씩 증가
// 다르면 t 포인터 1 증가

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let searchStartIndex = 0;
  for (const splittedS of s.split("")) {
    const foundIndex = t.indexOf(splittedS, searchStartIndex);

    if (foundIndex >= 0) {
      searchStartIndex = foundIndex + 1;
      continue;
    }
    return false;
  }
  return true;
};
