// Promise

const promise = new Promise(function (resolve, reject) {
   resolve('Good') 
});

const cows = 4;

const countCows = new Promise(function (resolve, reject) {
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`)
    }else{
        reject("there no cows on the farma")
    }
});
countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('finally'));

// Un callback devuelve una función en los parámetros, cuando llamamos varias veces un callback, estaremos colocando muchas lineas de código y sería engorroso, por eso nacen las promesas, éstas optimizan y permiten leer mejor el código con pocas lineas.
// Las promesas son asíncronas, por lo que el código continuará su ejecución normalmente y luego dirá si la promesa se resolvió o se rechazó. Por lo que varias promesas pueden llegar a entrar en ejecución al mismo tiempo.

// Reto 

export function reto(time, messege) {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(messege);
        }, time)
    })
}