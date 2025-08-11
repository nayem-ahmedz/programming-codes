function getRandom(){
    let random = Math.random() * 10;
    random = Math.round(random) + 10;
    return random;
}

const random = getRandom();
console.log(random);


// code to ensure if it can really genrate random value from 10 to 20
// const all = [];
// for(let i=0; i<10000; i++){
//     const random = getRandom();
//     if(!all.includes(random)){
//         all.push(random);
//     }
// }

// console.log(all.sort((a,b) => a-b))