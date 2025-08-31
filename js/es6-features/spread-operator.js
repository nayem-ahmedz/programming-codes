// 1. Merge these arrays into a single array:
const fruits = ['apple', 'mango'];
const moreFruits = ['banana', 'orange'];
const merged = [...fruits, ...moreFruits];
console.log(merged);

// 2. Make a copy of this array and add 100 at the end
const numbers = [1, 2, 3];
const copy = [...numbers, 100];
console.log(copy);

// 3. Merge Object with spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = {...obj1, ...obj2};
console.log(mergedObj);

// 4. Clone an object and override a property
const user = { name: 'Nayem', age: 25 };
const newUser = {...user};
newUser.age = 26;
console.log(newUser);

// 5. Create a function combineArrays(arr1, arr2) that takes two arrays and returns a single merged array using the spread operator.
function combineArrays(arr1, arr2){
    const merged = [...arr1, ...arr2];
    return merged;
}
const result = combineArrays(fruits, moreFruits);
console.log(result);