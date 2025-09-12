function validBdNumber(contact){
    if(typeof contact !== 'string'){
        return 'Invalid';
    }
    if(contact.length !== 11){
        return false;
    }
    for(const number of contact){
        if(number < '0' || number > '9'){
            return false;
        }
    }
    const firstTwo = contact.slice(0, 2);
    if(firstTwo === '01'){
        return true;
    }
}

const contact = '01 12345678';
console.log(validBdNumber(contact));