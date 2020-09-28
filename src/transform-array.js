const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const arrCopy = arr.concat();
  const result = [];

  for (let i = 0; i < arrCopy.length; i += 1) {
    if (arrCopy[i] === '--discard-next') {
      if (arrCopy[i + 1] !== '' && arrCopy[i + 1] !== undefined) {
        arrCopy[i + 1] = '';
      }
      arrCopy[i] = '';
    } else if (arrCopy[i] === '--discard-prev') {
      if (arrCopy[i - 1] !== '' && arrCopy[i - 1] !== undefined) {
        arrCopy[i - 1] = '';
      }
      arrCopy[i] = '';
    } else if (arrCopy[i] === '--double-next') {
      if (arrCopy[i + 1] !== '' && arrCopy[i + 1] !== undefined) {
        arrCopy[i] = arrCopy[i + 1];
      } else {
        arrCopy[i] = '';
      }
    } else if (arrCopy[i] === '--double-prev') {
      if (arrCopy[i - 1] !== '' && arrCopy[i - 1] !== undefined) {
        arrCopy[i] = arrCopy[i - 1];
      } else {
        arrCopy[i] = '';
      }
    }
  }

  for (let i = 0; i < arrCopy.length; i += 1) {
    if (arrCopy[i] !== '') {
      result.push(arrCopy[i])
    }
  }
  
  return result
};