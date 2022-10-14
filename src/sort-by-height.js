const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  let indexes = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == -1) {
      indexes.push(array.indexOf(-1, i));
    }
  }

  indexes.reverse().forEach(index => {
    array.splice(index, 1);
  });

  array.sort((a, b) => a - b);

  indexes.reverse().forEach(index => {
    array.splice(index, 0, -1)
  })

  return array;
}

module.exports = {
  sortByHeight
};
