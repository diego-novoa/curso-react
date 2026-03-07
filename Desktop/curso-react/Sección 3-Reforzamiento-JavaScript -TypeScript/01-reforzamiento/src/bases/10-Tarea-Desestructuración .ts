/* 
. La función debe llamarse useState.
. Debe retornar un arreglo con dos elementos:

#1 - Un string (el valor inicial).

#2 - Una función anónima de flecha que:

. Recibe un string.
. Imprime ese string en consola. */

const useState1 = () => {
	return ['Goku', 'Vegeta'] as const;
};
const [name1, setName1] = useState1();
console.log(name1, setName1);

const printString = () => {
	return ['Goku'] as const;
};
const [string,] = printString();
console.log(string,);

// tarea correcta 

const useState = (value: string) => {
	return [
		value,
		(newValue: string) => {
			console.log(newValue);
		},
	] as const;
};
const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');  