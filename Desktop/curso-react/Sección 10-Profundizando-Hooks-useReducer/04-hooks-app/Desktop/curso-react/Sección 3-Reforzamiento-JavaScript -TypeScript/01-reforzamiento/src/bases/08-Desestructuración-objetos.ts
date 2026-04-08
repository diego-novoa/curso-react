/*

*/

const person = {
	name: 'Tiny',
	age: 45,
	key: 'Ironman',
};

const { key, name: ironmanName, age } = person;

/* const name = person.name;
const key = person.key;
const age = person.age;
 */
console.log({ ironmanName, age, key })

interface Hero {
	name: string;
	age: number;
	key: string;
	rank?: string;
}

const useContext = ({ key, name, age, rank }: Hero) => {

	return {
		keyname: key,
		user: {
			name,
			age,
		},
		rank: rank,
	};
};
const {
	rank,
	keyname,
	user,
	//user: { name },
} = useContext(person);

const { name } = user;
console.log({ rank, keyname, name });