const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }

  let res = [];

  members.forEach(elem => {
    if (typeof(elem) === 'string') {
      res.push(elem.trim()[0].toUpperCase())
    }
  });
  return res.sort().join('')
};
