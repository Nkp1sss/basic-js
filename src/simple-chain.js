const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  arrayValues: [],
  getLength() {
    let length = 0;
    let arraySymbols = this.chain.split('');
    arraySymbols.forEach(symbol => {
      if (symbol == '(')
        length++;
    });

    return length
  },
  addLink(value) {
    if (this.chain == '')
      this.chain += `( ${value} )~`;
    else {
      this.chain += `~( ${value} )~`;
    }

    this.arrayValues.push(value);

    return this;
  },
  removeLink(position) {
    let count = 1;
    let arraySymbols = this.chain.split('');
    let newChain = '';

    this.arrayValues.splice(position - 1, 1);

    for (let i = 0; i < arraySymbols.length; i++) {
      if (arraySymbols[i] == '(') {
        if (count == position) {

          // если надо удалить не первый элемент, то i уменьшаем на 2, чтобы удалить еще и ~~
          if (i != 0)
            newChain = newChain.slice(0, newChain.length - 2);

          do {
            i++;
          }
          while (arraySymbols[i] != ')');
          if (arraySymbols[i] == ')' && position == 1) {
            i += 2;
          }
          // if (this.getLength() == position)
          //   newChain += '~';


          position = -1;
        }
        else {
          count++;
          newChain += arraySymbols[i];
        }
      }
      else {
        newChain += arraySymbols[i];
      }
    }

    this.chain = newChain;
    return this;
  },
  reverseChain() {
    let reversed = this.arrayValues.reverse();

    this.arrayValues = [];
    this.chain = '';

    reversed.forEach(element => {
      this.addLink(element);
    });

    return this;
  },
  finishChain() {
    return this.chain.slice(0, this.chain.length - 1);
  }
};

module.exports = {
  chainMaker
};

console.log(chainMaker.finishChain());