module.exports = function parseStringToArray(arrayAsString) {
  return arrayAsString.split(",").map(item => item.trim());
};