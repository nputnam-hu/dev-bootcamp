// complete the implementation of sum and reduce such that reducing an array
// returns the sum of its values
// [0,1,2,3].fold(sum, 0) === 6

const arr = [0,1,2,3,4];

let sum = function() {};

Array.prototype.reduce = function() {};

const total = arr.reduce(sum, 0);
console.log(total);
