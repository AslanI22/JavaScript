function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res; //убрал деление т.к. функция называется sum
}

let y = [6, 8, 4];
console.log(sum(y));