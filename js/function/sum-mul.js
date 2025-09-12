function sum(a, b){
    const sum = a + b;
    return sum;
}
function multiply(a, b){
    const mul = a * b;
    return mul;
}

let a = 4, b = 5;
const result = sum(a, b) + multiply(a, b);
console.log(result);