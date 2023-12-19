const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let n = 0; n < matrix[i].length; n++) {
      let count = 0;
      for (let s = -1; s < 2; s++) {
        if (matrix[i - 1] && matrix[i - 1][n + s]) count++;
        if (n !== n + s && matrix[i][n + s]) count++;
        if (matrix[i + 1] && matrix[i + 1][n + s]) count++;
      }
      row.push(count)
    }
    res.push(row)
  }
  return res
}

module.exports = {
  minesweeper
};
