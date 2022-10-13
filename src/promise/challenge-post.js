import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function postData(ursApi, data){
    const response = fetch(ursApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}
const data ={
    "title": "",
    "price": 1234,
    "description": "Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son",
    "categoryId": 1,
    "images": ["https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?cs=srgb&dl=pexels-pixabay-459762.jpg&fm=jpg"]
  }

  postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))