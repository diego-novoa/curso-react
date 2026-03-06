/*
Las funciones con múltiples retornos se refieren a cuando 
una función puede entregar más de un resultado al mismo 
tiempo.
*/
function greet(name: string): string {
	return `Hola ${name}`;
}

const greet2 = (name: string) => `Hola ${name}`// function flecha

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

interface user {
	uid: 'ABC-123',
	username: 'El_papi23',
}

function getUser() {
	return {
		uid: 'ABC-123',
		username: 'El_papi23',
	};
}


const getUser2 = () => ({ // function flecha
	uid: 'ABC-123',
	username: 'El_papi23',
});

const user = getUser();
const user2 = getUser2();

console.log(user, user2)

// function Callbacks

const myNumbers: number[] = [1, 2, 3, 4, 5];

/*myNumbers.forEach(function (value) {
	console.log({ value });
});*/

myNumbers.forEach((value) => {
	console.log({ value });
});

// Se define una función llamada analizarEstudiante que recibe el nombre y dos notas
function analizarEstudiante(nombre, nota1, nota2) {

	// Se calcula el promedio sumando las dos notas y dividiendo entre 2
	let promedio = (nota1 + nota2) / 2;

	// Se verifica si el promedio es mayor o igual a 3
	let aprobado = promedio >= 3;

	// Si el promedio es mayor o igual a 3 el resultado será true (aprobado)
	// Si es menor que 3 el resultado será false (reprobado)

	// La función devuelve varios resultados agrupados
	return {

		// Devuelve el nombre del estudiante
		nombre: nombre,

		// Devuelve el promedio calculado
		promedio: promedio,

		// Devuelve si aprobó o no
		aprobado: aprobado

	};

} // Aquí termina la función


// Se ejecuta la función enviando el nombre y las notas
let resultado = analizarEstudiante("Ana", 4, 5);

// Se muestra el nombre que devolvió la función
console.log(resultado.nombre);

// Se muestra el promedio calculado
console.log(resultado.promedio);

// Se muestra si aprobó o no
console.log(resultado.aprobado);

// version corta

// Se define una función que analiza un estudiante
function analizarEstudiante1(nombre, nota1, nota2) {

	// Se calcula el promedio de las dos notas
	const promedio = (nota1 + nota2) / 2;

	// Se devuelve un objeto con todos los resultados
	return {
		nombre,                 // Devuelve el nombre recibido
		promedio,               // Devuelve el promedio calculado
		aprobado: promedio >= 3 // Devuelve true si aprobó o false si reprobó
	};

} // Fin de la función


// Se ejecuta la función enviando los datos del estudiante
const resultado1 = analizarEstudiante1("Ana", 4, 5);

// Se muestran los resultados en la consola
console.log(resultado1.nombre);    // Nombre del estudiante
console.log(resultado1.promedio);  // Promedio calculado
console.log(resultado1.aprobado);  // true = aprobó, false = reprobó