const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
	const mySet = new Set(arr);

	return [...mySet];
}

console.log(valoresUnicos(meuArray));

//const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

//function valoresUnicos(arr) {
//	const mySet = new Set(arr);

//	return mySet;
//}

//console.log(valoresUnicos(meuArray)); --> Vai retornar um Set, é preciso retornar um Array.