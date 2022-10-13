// Callback es una funcion que pasa a otra funtion 

function sum(num1, num2) {
    return num1 + num2;
};

function cal(num1, num2, suma) {
    return suma(num1, num2);
};

console.log(cal(3, 4, sum));

// Settimeout es un callback que recive una funtion

setTimeout(function () {
    console.log('hiii JS')
}, 4000)

function greettin(name) {
    console.log(`Hola ${name}`)
};

setTimeout(greettin, 2000, 'Isac')

// Reto 

