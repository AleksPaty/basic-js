const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let cur;
  let count = 0;
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0) cur = str[i]
    if (cur === str[i]) {
      count++
    } else {
      res += count > 1 ? `${count}${str[i - 1]}` : `${str[i - 1]}`;
      cur = str[i]
      count = 1;
    }
    if (i === str.length-1) {
      if (str[i] === cur) res += count > 1 ? `${count}${str[i]}` : `${str[i]}` 
    }
  }
  return res
}

module.exports = {
  encodeLine
};
