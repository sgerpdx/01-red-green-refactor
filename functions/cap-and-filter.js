const arrayUpper = (array) => {
  return array.map((a) => a.toUpperCase());
};

const capitalizeAndFilter = (array) => {
  const capsArray = arrayUpper(array);
  let filteredArray = [];
  capsArray.map((string) => {
    if (string.charAt(0) !== 'F') {
      filteredArray.push(string);
    }
  });
  return filteredArray;
};

module.exports = capitalizeAndFilter;
