const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async'), 200)
        :reject(new error('error'));
    });
}

const anotherFn = async () =>{
    const some = await fnAsync();
    console.log(some);
    console.log('isac');
}

console.log('before');
anotherFn();
console.log('after');


// La declaración de función async define una función asíncrona que devuelve un objeto, lo cual permite a un programa correr una función sin congelar todo la compilación.Dada que la finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas, se hace más fácil escribir promesas.
// La palabra async antes de la función, hace que la función devuelva una promesa.
// La palabra await se utiliza dentro de las funciones async, lo que hace que el programa espere hasta que la variable(promesa) se resuelva para continuar.