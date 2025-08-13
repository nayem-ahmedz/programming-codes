// Find the lowest number in the array below

function getLowestNumber(array){
    if(Array.isArray(array)){
       let lowest = array[0];
       for(const numb of array){
        if(numb < lowest){
            lowest = numb;
        }
       }
       return lowest; 
    }
    return false;
}

const array = [167, 190, 120, 165, 137];
console.log(getLowestNumber(array));