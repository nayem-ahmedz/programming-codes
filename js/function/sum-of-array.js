function getSum(array){
    if(!Array.isArray){
        return 'invalid';
    }
    let sum = 0;
    for(let i=0; i<array.length; i++){
        if(typeof array[i] !== 'number'){
            return 'invalid';
        }
        sum = sum + array[i];
    }
    return sum;
}

// const array = [1, '3', 2];
const array = [1, 3, 2];
console.log(getSum(array));