function getLongestWord(string){
    const words = string.split(' ');
    let longestWord = '';
    for(const word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

const string = 'I am learning Programming to become a programmer';
console.log(getLongestWord(string));