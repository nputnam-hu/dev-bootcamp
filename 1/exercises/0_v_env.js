// What will print and why?
// What will change if we delete line 5? Why?

function x() {
    let a;
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
