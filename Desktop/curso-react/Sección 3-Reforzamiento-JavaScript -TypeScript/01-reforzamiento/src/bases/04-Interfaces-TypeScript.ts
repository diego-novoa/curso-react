/*
✔️ En resumen:
Una interface en React define qué propiedades y tipos de datos
 debe tener un objeto o componente.

 es mas esclable y legible
*/

interface Person {
	firstName: string;
	lastName: string;
	age: number;
	address: address;
}

interface address {
	postlCode: string;
	city: string;
}

const ironman: Person = {
	firstName: 'Tony',
	lastName: 'Stark',
	age: 45,
	address: {
		postlCode: 'ABC-123',
		city: 'New York',
	},
};

console.log(ironman);