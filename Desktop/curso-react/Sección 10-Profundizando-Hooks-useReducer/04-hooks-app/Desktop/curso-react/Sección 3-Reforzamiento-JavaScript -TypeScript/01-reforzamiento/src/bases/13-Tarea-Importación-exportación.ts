/*
* getHeroesByOwner => []
* filtrar heroes por su propetario
* @param Owner - el propietario por el cual filtra (DC)
* @returns Array de heroes paertenecientes al propietario
*/


// Importa desde el archivo "../data/heroes.data":
// - heroes: el arreglo que contiene todos los héroes
// - type Hero: el tipo o interfaz que define la estructura de un héroe
// - Owner: el enum que define los posibles propietarios (DC o Marvel)
import { heroes, type Hero, Owner } from "../data/heroes.data"


// Exporta una función llamada getHeroesByOwner para que pueda ser usada en otros archivos
// La función recibe un parámetro llamado "owner" que debe ser del tipo Owner (DC o Marvel)
export const getHeroesByOwner = (owner: Owner) => {

  // Crea una constante llamada heroesByOwner
  // Utiliza el método filter() para recorrer el arreglo "heroes"
  // y devolver solo los héroes cuyo propietario (owner) sea igual al parámetro recibido
  const heroesByOwner = heroes.filter((hero) => hero.owner === owner);

  // Retorna el arreglo filtrado con los héroes que pertenecen al owner indicado
  return heroesByOwner;
};