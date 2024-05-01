// 2차 (PASS)
// 이진 탐색 활용

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const ROW = matrix.length;
    const COLUMN = matrix[0].length;

    let left = 0;
    let right = ROW * COLUMN - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        const {row, column} = getPosition(middle);

        if (matrix[row][column] === target) {
            return true;
        }
        if (matrix[row][column] > target) {
            right = middle - 1;
        }
        if (matrix[row][column] < target) {
            left = middle + 1;
        }
    }

    return false;

    function getPosition (index) {
        return {
            row: Math.floor(index / COLUMN),
            column: index % COLUMN,
        }
    }
};

// 1차 (PASS)
// 이중 for문 활용

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let m = 0; m < matrix.length; m++) {
        for (let n = 0; n < matrix[m].length; n++) {
            if (matrix[m][n] === target) {
                return true;
            }
            if (matrix[m][n] > target) {
                return false;
            }
        }
    }
    return false;
};