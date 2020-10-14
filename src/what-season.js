const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const spring = 'spring',
  summer = 'summer',
  autumn = 'autumn',
  winter = 'winter',
  undefinedDate = 'Unable to determine the time of year!'

if (date === undefined) {
  return undefinedDate
} else if (typeof date.getMonth !== 'function') {
  throw new Error('THROW')
} else {
  month = date.getMonth()

  switch (month) {
    case 2:
    case 3:
    case 4:
      return spring
      break
    case 5:
    case 6:
    case 7:
      return summer
      break
    case 8:
    case 9:
    case 10:
      return autumn
      break
    case 11:
    case 0:
    case 1:
      return winter
      break
    default:
      throw new Error('THROW')
  }
}
};
