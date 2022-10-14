const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(message, key) {
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    if (arguments.length == 0) {
      throw new Error('Incorrect arguments!')
    }
  }
  decrypt(encryptedMessage, key) {
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    if (arguments.length == 0) {
      throw new Error('Incorrect arguments!')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
