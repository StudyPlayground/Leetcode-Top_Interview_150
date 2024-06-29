// 1차 (PASS)

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let result = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        result += 1;
        bfs(r, c);
        // or
        // dfs(r, c);
      }
    }
  }

  return result;

  function bfs(startRow, startColumn) {
    const queue = [];
    queue.push([startRow, startColumn]);

    while (queue.length > 0) {
      const [row, column] = queue.shift();

      if (!isValidPosition(row, column)) {
        continue;
      }

      if (grid[row][column] === "0") {
        continue;
      }

      grid[row][column] = "0";
      queue.push([row - 1, column]);
      queue.push([row + 1, column]);
      queue.push([row, column - 1]);
      queue.push([row, column + 1]);
    }
  }

  function dfs(row, column) {
    if (!isValidPosition(row, column)) {
      return;
    }

    if (grid[row][column] === "0") {
      return;
    }

    grid[row][column] = "0";
    dfs(row - 1, column);
    dfs(row + 1, column);
    dfs(row, column - 1);
    dfs(row, column + 1);
  }

  function isValidPosition(row, column) {
    if (row < 0 || grid.length <= row) {
      return false;
    }
    if (column < 0 || grid[0].length <= column) {
      return false;
    }
    return true;
  }
};
