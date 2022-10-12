const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(list) {
  if (!Array.isArray(list)) return false;
  let secretName = [],
      count = 0;

  secretName = list.map(name => {
    if (typeof name == 'string') {
      count++;
      return name.trim()[0].toUpperCase();
    }
  });

  if (count == 0) return false;
  return secretName.sort().join('');
}

//console.log(createDreamTeam(['George', 'Brian', 'Christine', 'Charles', 'Bruce', 'Philip', 'Johnny', 'Steven', 'Brandon', 'Mark']));

module.exports = {
  createDreamTeam
};
