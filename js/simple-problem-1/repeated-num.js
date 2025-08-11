function getRepeatedNumberCount(arr, key){
    let count = 0;
    for(const el of arr){
        if(el === key){
            count++;
        }
    }
    return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
let key = 5;
console.log(getRepeatedNumberCount(numbers, key));

const numbers2 = [5, 6, 11, 12, 98, 5];
let key2 = 25;
console.log(getRepeatedNumberCount(numbers2, key2));