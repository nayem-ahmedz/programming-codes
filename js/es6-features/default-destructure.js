// 1. Create a function greet that takes a name and prints Hello [name]. If no name is given, it should print Hello Guest
function greet(name = 'Guest'){
    console.log(`Hello ${name}`);
}
greet('Nayem');
greet();

// 2. Given const colors = ['red', 'green', 'blue'];, extract the first and third color into variables and print them.
const colors = ['red', 'green', 'blue'];
// const [first, second, third] = colors;
const [first, , third] = colors; // you can skip using comma
console.log(first, third);

// 3. Object Destructuring : Extract username and country into variables using destructuring
const user = { username: 'Nayem', age: 25, country: 'BD' };
const {username, country} = user;
console.log(username, country);