let sum = sum([1, 2, 3, 4, 5]);
console.log(sum(sum));

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}