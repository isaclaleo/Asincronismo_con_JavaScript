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
// function code(callback) {
//     window.setTimeout(() => {
//         callback()
//     }, 2000)
// }

function call(callback) {
    console.log(`Log after 2s ${callback}`)
}
function print(msn) {
    window.setTimeout(() => {
        msn(console.log('Execute function', call))
    }, 2000);
}