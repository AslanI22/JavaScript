let number = 6;
let bool = true;
for (let i = 2; i <= Math.sqrt(number); i++) {
	if (number % i === 0) {
		bool = false;
		console.log('Составное число.'); 
		}
	}
if (bool) {
	console.log('Число простое.');
}


 
  