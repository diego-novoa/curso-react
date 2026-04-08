import type { GyphyRandomResponse } from '../data/16-giphy-response';

const API_KEY = 'svRDDObwtN88FH4feJSncbg6YWpN6oA1';

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;

  document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
  const { data }: GyphyRandomResponse = await response.json();
  return data.images.original.url;
};

getRandomGifUrl().then(createImageInsideDOM);
