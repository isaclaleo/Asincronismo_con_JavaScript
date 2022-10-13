// Por medio de Fetch se puede realizar peticiones HTTP asíncronas de JavaScript (JS) con promesas. La API Fetch proporciona una interfaz JS más cómoda para acceder y manipular; fetch() es un método global.

// fetchData(`${API}/products`)
// .then(response => response.json())
// .then(products => {
//     console.log(products)
// })
// .then(() => {
//     console.log('isac')
// })
// .catch(error => console.log(error));
import fetch from "node-fetch";

const API  = 'https://api.escuelajs.co/api/v1';


// Funcion que se va a recibir como argumento la url queremos llamar y retorna al llamado fecth: una promesa
function fetchData(urlApi) {
    return fetch(urlApi);
}
// el llamado
fetchData(`${API}/products`)
// Se pueden anidar multiple then 
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('finaly'));
