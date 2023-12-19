const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof Number(sampleActivity) !== 'number' || typeof sampleActivity !== 'string') {
    return false;
  }
  if (Number(sampleActivity) < 1 || isNaN(sampleActivity) || !isFinite(Number(sampleActivity))) {
    return false;
  }
  
  let spR = 0.693 / HALF_LIFE_PERIOD;
  let result = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / spR;
  if (Math.ceil(result) > 0) {
    return Math.ceil(result)
  } else {
    return false
  }
}

module.exports = {
  dateSample
};
