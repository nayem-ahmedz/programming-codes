// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function countZero(binaryString){
    let count = 0;
    for(const char of binaryString){
        if(char === '0'){
            count++;
        }
    }
    return count;
}

const binaryString = '01001100';
const count0s = countZero(binaryString);
console.log(count0s);