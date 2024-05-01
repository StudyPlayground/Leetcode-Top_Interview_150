// 1차 (PASS)
// 더 빠른 시간복잡도의 코드는 new Map을 이용하지만 로직은 동일

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashMap = {};

    for (const str of strs) {
        const key = getKey(str);
        if (hashMap[key]) {
            hashMap[key].push(str);
        } else {
            hashMap[key] = [str];
        }
    }

    return Object.values(hashMap);

    function getKey (str) {
        return str.split('').sort().join('');
    }
};