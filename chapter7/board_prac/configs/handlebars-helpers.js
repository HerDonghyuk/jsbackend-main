/* module.export = {
  lengthOfList: (list = []) => list.length,
  eq: (val1, val2) => val1 === val2,
  dateString: (isoString) => new Date(isoString).toLocaleDateString,
};
 */

module.exports = {
  lengthOfLists: (list = []) => list.length,
  eq: (val1, val2) => val1 === val2,
  dateString: (isoString) => new Date(isoString).toLocaleDateString(),
};
