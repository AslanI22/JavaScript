function isPositive(num) {
	let arr = [];
	let x = [];
	arr = num.split(' ');
	for (let elem of arr) {
		x += elem[0].toUpperCase() + elem.slice(1) + ' ';
	}
	return x;
}

let num = 'я играю на Ясуо!';

console.log(isPositive(num));