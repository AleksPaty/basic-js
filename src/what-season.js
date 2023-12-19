const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (date === new Date()) throw new Error('Invalid date!');
  if (!Date.parse(date)) throw new Error('Invalid date!');
  if (Object.getOwnPropertyDescriptors(date)[Symbol.toStringTag]) throw new Error('Invalid date!');
  const seasonObj = {
    'winter': [11, 0, 1],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10]
  }
  let season;
  let month = date.getMonth()

  for (const key in seasonObj) {
    if (seasonObj[key].includes(month)) {
      season = key;
      break
    }
  }
  return season
}

module.exports = {
  getSeason
};
