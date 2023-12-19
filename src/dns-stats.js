const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}

  let mArr = domains.map((d) => {
    let sub = d.split('.')
    let path = [];
    for (let i = sub.length - 1; i >= 0; i--) {
      if (i == sub.length - 1) {
        path.push(`.${sub[i]}`)
      } else {
        path.push(`${path.at(-1)}.${sub[i]}`)
      }
    }
    return path
  })
  let doms = mArr.flat();
  for (let i = 0; i < doms.length; i++) {
    if (!obj.hasOwnProperty(doms[i])) {
      obj[doms[i]] = 1
    } else {
      obj[doms[i]] += 1 
    }
  }
  
  return obj
}

module.exports = {
  getDNSStats
};
