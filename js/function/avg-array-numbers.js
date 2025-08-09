// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function getAvg(arr, size){
    let sum = 0;
    for(const numb of arr){
        sum += numb;
    }
    const avg = sum / size;
    return avg;
}

// const numbers = [2, 5, 1, 6, 8, 2, 9, 10];
const numbers = [2, 1, 3, 4, 5];
const size = numbers.length;
console.log(getAvg(numbers, size));