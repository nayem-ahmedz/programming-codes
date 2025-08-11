function getFahrenheit(celsius){
    const fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}

const celsius = 25;
console.log(getFahrenheit(celsius));