const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let cur = s2;
  for (let i = 0; i < s1.length; i++) {
    let ind = cur.indexOf(s1[i])
    if (ind > -1) {
      cur = ind !== cur.length - 1
        ? cur.slice(0, ind) + cur.slice(ind + 1)
        : cur.slice(0, -1)
    }
  }
  return s2.length - cur.length
}

module.exports = {
  getCommonCharacterCount
};
