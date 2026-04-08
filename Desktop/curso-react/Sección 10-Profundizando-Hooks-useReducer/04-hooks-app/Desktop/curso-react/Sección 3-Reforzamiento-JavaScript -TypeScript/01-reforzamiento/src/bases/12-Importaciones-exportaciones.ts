/*
para realizar las importaciones o exportaciones
se debe colocar export al arreglo, 
'export const heroes: Hero[] = ['
o a la inerface tambien se lo coloca la palabra export,
'export interface Hero { '
*/

// Se importan dos cosas desde el archivo heroes.data
// heroes → el arreglo que contiene todos los héroes
// type Hero → el tipo o interfaz que describe cómo es la estructura de un héroe
import { heroes, type Hero } from "../data/heroes.data"


// Se declara una función llamada getHeroById
// Esta función recibe un parámetro llamado id que debe ser de tipo number
// La función puede devolver:
// - un objeto de tipo Hero
// - o undefined si no encuentra el héroe
const getHeroById = (id: number): Hero | undefined => {

  // Se busca dentro del arreglo heroes usando el método find
  // find recorre todos los elementos del arreglo hasta encontrar uno que cumpla la condición
  const hero = heroes.find((hero) => {

    // Se compara si el id del héroe actual es igual al id recibido por la función
    // Si la condición es verdadera, find devolverá ese héroe
    return hero.id === id;

  });

  // Se devuelve el resultado de la búsqueda
  // Puede ser:
  // - el héroe encontrado
  // - undefined si no existe un héroe con ese id
  return hero;
};


// Se llama la función enviando el número 4 como id
// El resultado se imprime en la consola
// En este caso buscará el héroe cuyo id sea 4
console.log(getHeroById(4));