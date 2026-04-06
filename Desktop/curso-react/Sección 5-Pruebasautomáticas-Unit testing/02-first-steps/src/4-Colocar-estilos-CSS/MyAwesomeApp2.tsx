/*
ejemplo de un componente mas organizado
*/

import type { CSSProperties } from "react";

const firstName = 'Diego';
const lastName = 'Novoa';
const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isaActive = false;

const address = {
  zipCode: 'ABC-123',
  country: ' Canada ',
};

const myStyle: CSSProperties = {
  backgroundColor: 'red',
  borderRadius: 10,
  padding: 10,
  marginTop: 30,
};  // ponemos doble llave, la primera llave es para una exprecion, y 
// la segunda llave es para un objeto 

export const MyAwesomeApp2 = () => {
  return (
    <>
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>

      <p> {favoriteGames.join(', ')} </p>
      <p> {2 + 2} </p>
      <h1> {isaActive ? 'activo' : ' No activo'} </h1>
      <p style={myStyle}> {JSON.stringify(address)} </p>

    </>
  );
};

