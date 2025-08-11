function getVowelCounts(string){
    let count = 0;
    const viowels = ['a', 'e', 'i', 'o', 'u'];
    for(let char of string){
        char = char.toLowerCase();
        if(viowels.includes(char)){
            count++;
        }
    }
    return count;
}

const string = 'Hey, I am Nayem Ahmed'
console.log(getVowelCounts(string));