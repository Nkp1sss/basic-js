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
  let field = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    field[i] = new Array(matrix[0].length);
    for (let j = 0; j < matrix[0].length; j++) {
      field[i][j] = 0;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == true) {
        if (isCorresponds(field, i - 1, j - 1))
          field[i - 1][j - 1] += 1;
        if (isCorresponds(field, i - 1, j))
          field[i - 1][j] += 1;
        if (isCorresponds(field, i - 1, j + 1))
          field[i - 1][j + 1] += 1;
        if (isCorresponds(field, i, j - 1))
          field[i][j - 1] += 1;
        if (isCorresponds(field, i, j + 1))
          field[i][j + 1] += 1;
        if (isCorresponds(field, i + 1, j - 1))
          field[i + 1][j - 1] += 1;
        if (isCorresponds(field, i + 1, j))
          field[i + 1][j] += 1;
        if (isCorresponds(field, i + 1, j + 1))
          field[i + 1][j + 1] += 1;
      }
    }
  }

  return field;
}

function isCorresponds(field, i, j) {
  if (i < 0 || j < 0 || i > field.length - 1 || j > field[i].length - 1) return false;
  return true;
}

module.exports = {
  minesweeper
};
