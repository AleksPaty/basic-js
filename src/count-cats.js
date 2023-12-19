const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const niceCat = '^^';
  let countCat = 0;
  matrix.flat().forEach((v) => {
    if (v === niceCat) {
      countCat++;
    }
  })
  return countCat
}

module.exports = {
  countCats
};
