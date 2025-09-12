function countVowels(string){
    if(typeof string !== 'string'){
        return 'invalid';
    }
    let vowels = 0;
    for(const char of string){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            vowels++;
        }
    }
    return vowels;
}

const sentence = 'nayem';
console.log(countVowels(sentence));