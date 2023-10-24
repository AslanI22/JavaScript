let arr = ['a', 'b', 'c', 'd', 'e'];
let x = 0;
for (let i = 0; i < arr.length; i++) {
	if (arr[i] == 'c') {
		x = 1;
	} 
}
if (x == 1) {
	console.log('+++');
} else {
	console.log('---');
}


