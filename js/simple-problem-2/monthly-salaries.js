// find the total salary payable, for a company

function montlyTotal(employees){
    let total = 0;
    for(const emp of employees){
        const totalIncrements = emp.experience * emp.increment;
        const salary = emp.starting + totalIncrements;
        total += salary;
    }
    return total;
}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
console.log('Pay total in a month:', montlyTotal(employees));