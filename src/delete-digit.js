const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString()
  let min = 9;
  let val = 0;
  let s;
  for (let i = 0; i < str.length; i++) {
    if (1 * str[i] < min * 1)
      s = str.replace(str[i], '')
      if (Number(s) > val && s[0] !== '0') {
      val = Number(str.replace(str[i], ''))
      min = str[i]
    } 
  }
  return Number(str.replace(min, ''))
}

module.exports = {
  deleteDigit
};
