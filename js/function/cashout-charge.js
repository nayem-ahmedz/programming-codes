function cashOutCharge(amount){
    if(typeof amount !== 'number' || amount < 0){
        return 'invalid';
    }
    charge = amount * (1.75 / 100);
    return charge;
}

console.log(cashOutCharge(999));