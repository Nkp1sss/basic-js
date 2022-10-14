const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let lastIndex = email.lastIndexOf('@');
  return email.split('').slice(lastIndex + 1).join('');
}

module.exports = {
  getEmailDomain
};
