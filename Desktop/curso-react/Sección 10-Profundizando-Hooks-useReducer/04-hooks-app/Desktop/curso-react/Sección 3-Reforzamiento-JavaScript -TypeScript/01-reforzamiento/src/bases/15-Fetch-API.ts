/*
La primera promesa de fetch se resuelve con un objeto 
Response que contiene información de la cabecera y el estado. 
Se necesita llamar al método .json() para procesar el cuerpo de la respuesta, el cual a su vez devuelve otra promesa.
*/

const API_KEY = 'svRDDObwtN88FH4feJSncbg6YWpN6oA1';
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

myRequest
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl

    document.body.append(imgElement);
  })
  .catch((err) => {
    console.error(err);
  })