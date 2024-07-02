// 1차 (PASS - chatgpt 이용)
// 1. 테두리를 돌면서 "O"인 경우 "#"으로 변경 (dfs 또는 bfs 이용)
// 2. 모든 "O"을 "X"로 변경
// 3. 모든 "#"을 "O"으로 변경

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  for (let r = 0; r < board.length; r++) {
    if (board[r][0] === "O") {
      dfs(r, 0);
    }
    if (board[r][board[0].length - 1] === "O") {
      dfs(r, board[0].length - 1);
    }
  }
  for (let c = 0; c < board[0].length; c++) {
    if (board[0][c] === "O") {
      dfs(0, c);
    }
    if (board[board.length - 1][c] === "O") {
      dfs(board.length - 1, c);
    }
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      }
    }
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === "#") {
        board[r][c] = "O";
      }
    }
  }

  function dfs(row, column) {
    if (!isValidPosition(row, column)) {
      return;
    }
    if (board[row][column] !== "O") {
      return;
    }

    board[row][column] = "#";

    dfs(row - 1, column);
    dfs(row + 1, column);
    dfs(row, column - 1);
    dfs(row, column + 1);
  }

  function isValidPosition(row, column) {
    if (row < 0 || board.length <= row) {
      return false;
    }
    if (column < 0 || board[0].length <= column) {
      return false;
    }
    return true;
  }
};
