function func(num) {
	let i = 0;
	for (; num > 10; i++) {
		num /= 2;
	}
	return i;
}

console.log( func(150) );

