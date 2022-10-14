const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let counter = 1;
    let maxDepth = 0;
    array.forEach(element => {
      if (Array.isArray(element)) {
        maxDepth = Math.max(this.calculateDepth(element), maxDepth);
      }
    });

    return counter + maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
