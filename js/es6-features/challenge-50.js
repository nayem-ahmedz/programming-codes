// ===================== ES6 PRACTICE PROBLEMS =====================
// Topics: let & const, Arrow Functions, Template Literals,
// Default Parameters, Destructuring, Spread Operator
// ================================================================

// ------------------- 1. let & const -------------------

/* 1. Declare a variable "city" using let and assign your city name.
    Then declare a constant "country" using const and assign your country name. */
let city = 'Sylhet';
const country = 'Bangladesh';


// 2. Try reassigning a let variable and a const variable. Observe the difference.
city = 'Dhaka';
// country = 'Pakistan'; // assignment to constant variable error


// 3. Use let inside a block and try to access it outside the block. What happens?
{
    let a = 5;
}
// console.log(a); // a is not defined


// 4. Create a block where you declare a variable using var, and another using let.
//    Compare the behavior of both outside the block.
{
    var number = 5;
    let numbe2 = 6;
}
console.log(number); // number2 is not defined


// 5. Explain why you should use const for arrays and objects even though their contents can change.
/*
Using const in object and array elements will keep the original type immutable, which means you can not change the type later, or reassign same elements again. But properties or elements in the array can be modified.
    const ar = [2, 3, 4];
    console.log(ar);
    // ar = 'string'; // through error
*/


// ------------------- 2. Arrow Functions -------------------

// 6. Write an arrow function that returns the sum of two numbers.
const getSum = (a, b) => a + b;


// 7. Write an arrow function that returns the cube of a number.
const getCube = num => num ** 3;


// 8. Create an arrow function that takes two numbers and returns the larger one.
const getLarge = (a, b) => a > b ? a : b;


// 9. Write an arrow function that converts Celsius to Fahrenheit.
// skip


// 10. Create an arrow function that takes an array and returns the first element.
const getFirstEl = arr => arr[0];


// ------------------- 3. Template Literals -------------------

// 11. Create a template literal that includes your name and age in a sentence.
const name = 'Nayem', age = 25;
const sentence = `My name is ${name} and I am ${age} years old`;


// 12. Use template literals to print a 3-line string without using "\n".
const threeLineStr =`This is a 3
line string
created using template literal`;
console.log(threeLineStr);


// 13. Create a template literal that calculates and shows the area of a rectangle (length × width).
const length = 5, width = 4;
const area = `Area : ${length} x ${width} = ${length * width}`;
console.log(area);


// 14. Use template literals to embed an expression that calculates a discount price
//     (price - (price * discount / 100)).
const price = 120, discount = 15;
const payAmount = `Total Pay: ${price - (price * discount / 100)}`;
console.log(payAmount);


// 15. Create a template literal that prints current year using `new Date().getFullYear()`.
console.log(`current year is ${new Date().getFullYear()}`);


// ------------------- 4. Default Parameters -------------------

// 16. Write a function greet that says "Hello Guest" if no name is provided.
// skip

// 17. Create a function multiply that multiplies two numbers, defaulting the second number to 1.
function multiply(num1, num2 = 1){
    return num1 * num2;
}


// 18. Write a function that calculates interest. Default rate = 5% if not provided.
function getInterest(amount, rate = 5){
    return amount + (amount * rate / 100);
}


// 19. Create a function that prints "Welcome [name], age [age]" where name defaults to "User" and age defaults to 18.
function welcome(name= 'user', age = 18){
    console.log(`Welcome ${name}, age ${age}`);
}


// 20. Write a function that takes a number and prints its power. Default power = 2 (square).
function getPower(num = 2){
    (num) ? num ** num : num;
}
console.log(getPower());


// ------------------- 5. Destructuring -------------------

// 21. Given an array of three colors, extract the first and last using destructuring.
const colors = ['red', 'green', 'blue'];
const [first, , third] = colors;


// 22. Skip the second element in an array using destructuring and log the others.


// 23. Given an object {title: "Book", author: "John"}, extract title and author using destructuring.

// 24. Rename properties during destructuring: extract title as bookTitle from the above object.

// 25. Destructure an object that contains nested properties:
//     const user = { info: { name: "Nayem", age: 25 } } -> Extract name.


// ------------------- 6. Spread Operator -------------------

// 26. Merge two arrays: [1,2,3] and [4,5,6] using spread.

// 27. Clone an array and add an element at the end using spread.

// 28. Merge two objects: {a:1, b:2} and {c:3, d:4} using spread.

// 29. Clone an object and override one property using spread.

// 30. Use spread to convert a string into an array of characters.


// ------------------- 7. Combined ES6 Features -------------------

// 31. Create an arrow function that takes any number of arguments and returns their sum
//     (Hint: use rest operator).

// 32. Write a function that accepts an object with name and age and prints "Hello [name], age [age]"
//     using destructuring in the function parameter.

// 33. Merge three arrays into one using spread operator.

// 34. Copy an object, add a new property "country: 'Bangladesh'" using spread.

// 35. Create a function that takes an array and returns the second element using destructuring.


// ------------------- 8. Logical Practice -------------------

// 36. Create an arrow function that checks if a number is even or odd.

// 37. Write a function that takes a string and returns its length using arrow function.

// 38. Create a function that reverses an array using spread operator.

// 39. Use template literals to print "The sum of 4 and 5 is 9".

// 40. Write a function that multiplies all numbers in an array using an arrow function and reduce().


// ------------------- 9. Bonus Problems -------------------

// 41. Create a function that merges any number of arrays using spread and rest.

// 42. Write a function that takes a user object and returns a new object with an extra property "role: user".

// 43. Write a function that takes an array of numbers and returns max and min using destructuring.

// 44. Create an object with properties name and age, then clone it and change the name.

// 45. Write a function that takes an array of strings and uses template literals to join them with spaces.


// ------------------- 10. Challenges -------------------

// 46. Use destructuring to swap values of two variables without a third variable.

// 47. Create an array of 5 numbers and print only the last two using destructuring.

// 48. Create an arrow function that takes two arrays and returns a single array with all elements doubled.

// 49. Create a function that uses default parameters and spread together.
//     (Example: multiply a number by all numbers in an array, default array = [1,2,3]).

// 50. Write a function that takes an object and prints "Name: [name], Age: [age], Country: [country]".
//     If any property is missing, use default values.
