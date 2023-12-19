const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      let minInd = i;
      for (let n = i + 1; n < arr.length; n++) {
        if (arr[n] < 0) continue;
        if (arr[n] < arr[minInd]) minInd = n;
      }
      let moving = arr[i]
      arr[i] = arr[minInd]
      arr[minInd] = moving;
    }
  }
  return arr
}

module.exports = {
  sortByHeight
};
