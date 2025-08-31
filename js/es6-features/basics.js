// 1. Create a variable name that can change, and another birthYear that cannot change. Print both
let name = 'Nayem';
const birthYear = 2001;

console.log(name, birthYear);

// 2. Create an arrow function square that returns the square of a number
const getSquare = number => number * number;
console.log(getSquare(4));

// 3. Template literal
const message = `My name is ${name} and I am ${new Date().getFullYear() - birthYear} years old`;
console.log(message);