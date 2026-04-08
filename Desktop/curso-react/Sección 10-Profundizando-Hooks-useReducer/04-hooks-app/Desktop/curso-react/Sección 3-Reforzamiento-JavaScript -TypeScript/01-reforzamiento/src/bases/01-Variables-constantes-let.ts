/*
let: variable que puede cambiar
const: variables const 
codigo fasil de leer, fasil de mantener (eficiencia)
-variables y funciones en ingles

cree sus variables con la palabra resevada (const), 
por que no voy a cambiar a lo que apunta a la variable const.
*/

let firstName: string = 'Diego';
const lastName = 'Novoa';

console.log(firstName, lastName);

lastName.includes('n')
const containsLetterH = lastName.includes('n');
console.log({ containsLetterH });

let diceNumber = 5;
diceNumber = 3;
console.log({ diceNumber })

