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
  constructor(flag = true) {
    this.flag = flag;
  }

  encrypt(message, key) {
    if (!message || typeof message != 'string' || message.length == 0 || !key || typeof key != 'string'
    || key.length == 0) {
      throw new Error('Incorrect arguments!');
    }


    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetLength = alphabet.length;

    let listValues = message.toLowerCase().split('').map(letter => {
      if (alphabet.indexOf(letter) == -1) {
        return letter;
      }
      return alphabet.indexOf(letter);
    })


    let threadKeys = [];
    for (let i = 0; threadKeys.length < listValues.length;) {
      for (let j = 0; j < key.length; j++) {
        if (threadKeys.length == listValues.length) break;

        if (typeof listValues[i] == 'number')
          threadKeys.push(alphabet.indexOf(key[j].toLowerCase()));
        else {
          threadKeys.push(listValues[i]);
          j--;
        }
        i++;
      }
    }
    threadKeys = threadKeys.slice(0, listValues.length);


    let encryptedValues = [];
    for (let i = 0; i < threadKeys.length; i++) {
      if (typeof listValues[i] == 'number')
        encryptedValues.push((listValues[i] + threadKeys[i]) % alphabetLength);
      else
        encryptedValues.push(listValues[i]);
    }


    let encryptedText = encryptedValues.map(value => {
      if (typeof value == 'number')
        return alphabet[value];
      else
        return value;
    })


    if (this.flag)
      return encryptedText.join('').toUpperCase();
    else 
      return encryptedText.reverse().join('').toUpperCase();
  }

  // тот же самый метод, за исключением того, что значения и ключи потока вычитаются по модулю 26, а не слаживатся.
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || typeof encryptedMessage != 'string' || encryptedMessage.length == 0 || !key || typeof key != 'string'
      || key.length == 0) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetLength = alphabet.length;

    let listValues = encryptedMessage.toLowerCase().split('').map(letter => {
      if (alphabet.indexOf(letter) == -1) {
        return letter;
      }
      return alphabet.indexOf(letter);
    })


    let threadKeys = [];
    for (let i = 0; threadKeys.length < listValues.length;) {
      for (let j = 0; j < key.length; j++) {
        if (threadKeys.length == listValues.length) break;

        if (typeof listValues[i] == 'number')
          threadKeys.push(alphabet.indexOf(key[j].toLowerCase()));
        else {
          threadKeys.push(listValues[i]);
          j--;
        }
        i++;
      }
    }
    threadKeys = threadKeys.slice(0, listValues.length);


    let encryptedValues = [];
    for (let i = 0; i < threadKeys.length; i++) {
      if (typeof listValues[i] == 'number')
        encryptedValues.push((listValues[i] - threadKeys[i] + alphabetLength) % alphabetLength);
      else
        encryptedValues.push(listValues[i]);
    }


    let encryptedText = encryptedValues.map(value => {
      if (typeof value == 'number')
        return alphabet[value];
      else
        return value;
    })


    if (this.flag)
      return encryptedText.join('').toUpperCase();
    else 
      return encryptedText.reverse().join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
