/*
ejemplo de un componente mas organizado
*/
const firstName = 'Diego';
const lastName = 'Novoa';
const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isaActive = false;

const address = {
  zipCode: 'ABC-123',
  country: ' Canada ',
};

export const MyAwesomeApp1 = () => {
  return (
    <>
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>

      <p> {favoriteGames.join(', ')} </p>
      <p> {2 + 2} </p>
      <h1> {isaActive ? 'activo' : ' No activo'} </h1>
      <p> {JSON.stringify(address)} </p>

    </>
  );
};
