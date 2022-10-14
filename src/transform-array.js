const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (!Array.isArray(array))
    throw Error("'arr' parameter must be an instance of the Array!");

  let methods = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let transformedArray = [];

  for(let i = 0; i < array.length; i++) {
    let index = methods.indexOf(array[i]);
    if (index != -1) {
      switch (index) {
        case 0:
          i += 2;
          break;
        case 1:
          if (transformedArray.length != 0)
            transformedArray.pop();
          break;
        case 2:
          i++;
          if (typeof array[i] != 'undefined')
            transformedArray.push(array[i], array[i]);
          break;
        case 3:
          if (transformedArray.length != 0) {
            i--;
            transformedArray.push(array[i]);
            i += 1;
          }
          break;
      }
    }
    else {
      transformedArray.push(array[i]);
    }
  }

  return transformedArray;
}

module.exports = {
  transform
};


console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));


 





