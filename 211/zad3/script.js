function isPositive(arr) {
	for (let i = 0; i < arr.lenght; i++) {
	if(arr[i] == arr[i + 1]){
		return arr[i]+' повторяется';
	}
}
return 'отсутствует два одинаковых элемента подряд';
}

let mas = [2, 4, 6];

console.log(isPositive(mas));
