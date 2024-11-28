/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
const checkLength = (string = '', maxSymbols = 1) => string.length <= maxSymbols;

const isPalindrome = (string = '') => {

  string = string.replaceAll(' ', '').toLowerCase();

  let reverseString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];


    return string === reverseString;
  }
};
