const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    
    return this;
  },
  removeLink(position) {
    if(Number.isInteger(position) && position <= this.chain.length && position > 0) {
      this.chain.splice(position - 1, 1)

      return this;
    }
    else {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!")
    }

  },
  reverseChain() {
    this.chain = this.chain.reverse();

    return this;
  },
  finishChain() {
    let stringChain ='';

    this.chain.forEach(element => {
      stringChain += `( ${element} )~~`
    });

    this.chain = []; 
    return stringChain.slice(0, stringChain.length - 2);
  }
};

module.exports = {
  chainMaker
};