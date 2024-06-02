// 2차 (PASS)
// 코드 가독성 증가
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

// 1차 (PASS)

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
  console.log(str);
  for (let index = 0; index < Math.floor(str.length / 2); index++) {
    if (str[index] !== str[str.length - index - 1]) {
      return false;
    }
  }

  return true;
};
