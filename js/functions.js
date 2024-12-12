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
function extractsNumbers(string = '') {

  let str = '';
  let newStr = string.toString();

  for (let i = 0; i <= newStr.length - 1; i++) {
    if (parseInt(newStr[i], 10) || parseInt(newStr[i], 10) === 0) {
      str += newStr[i];

    }
  }
  if (str) {
    let num = Number(str);
    return Math.abs(num);
  } else {
    return NaN;
  }
}

