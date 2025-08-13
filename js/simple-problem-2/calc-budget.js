function calculateElectronicsBudget(laptopQ, tableQ, mobileQ){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    const totalMoney = laptopPrice * laptopQ + tabletPrice * tableQ + mobilePrice * mobileQ;
    return totalMoney;
}

console.log('Total Money Required :', calculateElectronicsBudget(1, 0, 2), 'taka');