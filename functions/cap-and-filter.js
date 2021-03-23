// const capitalizeString = (string) => {
//   string.toUpperCase();
// };

// const effGate = (string) => {
// if (string.charAt(0) !== 'F') {
//     return string;
// }
// };

// const capitalizeAndFilter = (array, currentValue) => {
//     const capsArray = array.map(capitalizeString(currentValue));
//     let filteredArray = [];
//     filteredArray.push(capsArray.filter(effGate(currentValue)));
//     return filteredArray;
// };

// const oldCapitalizeAndFilter = (array) => {
//   for (let index = 0; index < array.length; index++) {
//     const firstCharacter = array[index].charAt(0);

//     if (firstCharacter === 'F' || firstCharacter === 'f') {
//       array.splice(index, 1);
//     }
//   }

//   return array.map((a) => a.toUpperCase());
// };

// module.exports = capitalizeAndFilter;

//   ## capitalizeAndFilter

// create a function that takes an array of strings capitalize all strings and filter
// out any string that starts with the letter f.

// 1. **Write a test**
// 1. create a function, use a for loop to get test to pass
// 1. green, commit
// 1. refactor, use array methods to instead of a for loop
