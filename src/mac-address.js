const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (!n) return false;

  let arr = n.split('-')
  let result = -1;
  let reg = /[^A-F ^\d]/g
  for (let i = 0; i < arr.length; i++) {
    let invalInd = arr[i].search(reg);
    if (invalInd > -1) {
      result = invalInd;
      break;
    }
  }
  return result < 0
}
module.exports = {
  isMAC48Address
};
