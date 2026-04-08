import type { GyphyRandomResponse } from '../data/16-giphy-response';

const API_KEY = 'svRDDObwtN88FH4feJSncbg6YWpN6oA1';
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;

  document.body.append(imgElement);
}

myRequest
  .then((response) => response.json())
  .then(({ data }: GyphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);

  })
  .catch((err) => {
    console.error(err);
  });