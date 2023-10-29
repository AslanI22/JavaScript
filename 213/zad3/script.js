function getSum(arr) {
	let res = 1;
	
	for (let elem of arr) {
		res *= elem;
	}
	
	return res;
}

let x = [2, 3, 4];

console.log(getSum(x));