const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length == 0)
    return 'Unable to determine the time of year!';

  if (date instanceof Date && !date.hasOwnProperty('toString'))  {
    let monthNumber = date.getMonth();
    if (monthNumber > 1 && monthNumber < 5)
      return 'spring';
    else if (monthNumber > 4 && monthNumber < 8)
      return 'summer';
    else if (monthNumber > 7 && monthNumber < 11)
      return 'fall';
    else
      return 'winter';
  }
  else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
