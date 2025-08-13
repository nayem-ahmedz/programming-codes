// Find the friend with the smallest name

function getSmallestName(list){
    let smallest = list[0];
    for(const name of list){
        if(name.length < smallest.length){
            smallest = name;
        }
    }
    return smallest;
}

const frineds = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(getSmallestName(frineds));