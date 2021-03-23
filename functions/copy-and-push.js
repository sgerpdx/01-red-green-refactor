const copyAndPush = (array, item) => {
  const copiedArray = [...array];
  copiedArray.push(item);
  return copiedArray;
};

module.exports = copyAndPush;
