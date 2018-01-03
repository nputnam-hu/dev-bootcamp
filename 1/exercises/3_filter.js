// complete the following such that a new array with only integers
// (while numbers) is returned

const arr = ['hello', 42, true, function() {}, "123", 3.14, 0, [1], {}];

let isInteger = function() {};

Array.prototype.filter = function() {};

const newArr = arr.filter(isInteger);
console.log(newArr);
