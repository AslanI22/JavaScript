let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] - 1;
}

console.log(arr); // выведет [2, 4, 6, 8, 10]