const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, p2] = characterNames;
console.log({ p2 });

const [, , p3] = characterNames;
console.log({ p3 });

const returnsArrayFn = () => {
	return ['A,B,C', 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);