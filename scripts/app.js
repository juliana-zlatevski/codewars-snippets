// Write a function that returns both the minimum and maximum number of the given list/array.

// my version
const minMax = (arr) => {
  arr.sort((a, b) => a - b);
  return `${arr[0]}, ${arr[arr.length - 1]}`;
}

// version that makes codewars happy:
const minMax = (arr) => {
  arr.sort((a, b) => a - b);
  let newArr = [arr[0], arr[arr.length -1]];
  return newArr;
}

console.log(minMax([1,2,3,4,5])); // [1,5]
console.log(minMax([2334454,5])); // [5, 2334454]
console.log(minMax([1])); // [1, 1]
