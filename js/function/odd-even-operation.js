// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function operation(number){
    if(number % 2 === 1){
        return number * 2;
    } else{
        return number / 2;
    }
}

console.log(operation(5));
console.log(operation(10));