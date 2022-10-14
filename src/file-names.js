const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let coincidences = []; // совпадения

  let newNames = names.map(name => {
    let amountRepetition = 0;
    if (coincidences.includes(name)) {
      coincidences.forEach(element => {
        if (name == element) {
          amountRepetition++;
        }
      });
      coincidences.push(name);
      coincidences.push(`${name}(${amountRepetition})`);
      return `${name}(${amountRepetition})`;
    }
    else {
      coincidences.push(name);
      return name;
    }
  })

  return newNames;
}

module.exports = {
  renameFiles
};
