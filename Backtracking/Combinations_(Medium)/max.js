// 1차 (PASS)
// 시간 복잡도 높아서 개선 필요

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];

    for (let start = 1; start <= n; start++) {
        backtracking(start, [start]);
    }

    return result;
    
    function backtracking (start, subResult) {
        if (subResult.length === k) {
            result.push(subResult);
            return;
        }
        if (start === n) {
            return;
        }
        backtracking(start + 1, [...subResult])
        backtracking(start + 1, [...subResult, start + 1])
    }
};