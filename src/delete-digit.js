const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = (n + '').split('');
  let maxNumber = (-1) * n;

  let currentValue;
  for(let i = 0; i < array.join('').length; i++) {
    currentValue = n;
    currentValue.splice(i, 1);
    if (currentValue > maxNumber)
      maxNumber = currentValue;
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
