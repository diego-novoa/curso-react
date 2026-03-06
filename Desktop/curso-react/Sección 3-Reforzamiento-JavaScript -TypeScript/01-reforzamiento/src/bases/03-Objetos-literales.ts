/* Objetos lierales en js, son una abstracion del
	 mundo literal
*/
const ironman = {
	firstName: 'Tony',
	lastName: 'Stark',
	age: 24,
	address: {
		postlCode: 'ABC123',
		city: 'New York',
	}
};

//--const spiderman = ironman; // esto no es un clon, por que (spiderman) a punta al mismo espacio de memoria de (ironman)

//--const spiderman = { ...ironman }; // operador espret toma todas las propertis (propiedades), ironman y las esparsa dentro de (spiderman), esto rompe la referencia a primer nivel

const spiderman = structuredClone(ironman); // structuredClone, nos permite clonar a profundida, lo que se conoce como, Deep clone (clonación profunda) 

spiderman.firstName = 'Peter'; //  estoy cambiando las propertis (propiedades) y no a lo que a punta la variable(person)
spiderman.lastName = 'Parker';
spiderman.age = 33;
spiderman.address.city = 'San Jose';
spiderman.address.postlCode = 'FGH213'

console.log(ironman, spiderman);