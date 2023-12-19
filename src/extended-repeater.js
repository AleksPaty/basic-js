const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let patient = str;
  let separ = '';
  let additSepar = '';
  let mainRep = 0;
  let addition = '';
  let additRep = 0;
  for (const key in options) {
    switch (key) {
      case 'addition':
        addition = options[key] === null ? 'null' : options[key];
        break;
      case 'separator':
        separ = options[key];
        break;
      case 'repeatTimes':
        mainRep = options[key];
        break;
      case 'additionRepeatTimes':
        additRep = options[key];
        break;
      case 'additionSeparator':
        additSepar = options[key];
        break;
      default:
        break;
    }
  }
  let mainArr = [];
  let additArr = [];
  if (additRep > 0) {
    for (let i = 0; i < additRep; i++) {
      additArr.push(addition)
    }
    addition = additArr.join(additSepar ? additSepar : '|')
  }
  patient += addition;

  if (mainRep > 0) {
    for (let i = 0; i < mainRep; i++) {
      mainArr.push(patient)
    }
    patient = mainArr.join(separ ? separ : '+')
  }

  return patient
}

module.exports = {
  repeater
};
