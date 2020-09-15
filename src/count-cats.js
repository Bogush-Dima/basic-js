const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  
  let generalArr = [];
  let result = 0;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let val of matrix[i]) {
      generalArr.push(val);
    }
  }

  for (let cat of generalArr) {
    if (cat === '^^') {
      result += 1;
    }
  }

  return result;
};
