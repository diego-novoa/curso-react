/*
Un arreglo (array) es una lista 
de valores guardados en una sola variable. 📦

nota: sienpre definir cual es el tipo de dato
verifique ejemplo es la manera de trabajar
*/

const myArray: number[] = [1, 2, 3, 4, 5, 6];
const myArray3: number[] = [];
const myArray2 = [...myArray];
myArray2.push(7);

console.log({ myArray, myArray2, myArray3 })