// Modify the code below so that it prints 1, 2, 2
// console logs must stay in their respective functions
// HINT: lexical environment

function x() {
    console.log(a);
}

function y() {
    let a = 2;
    console.log(a);
    x();
}

let a = 1;
console.log(a);
y();
