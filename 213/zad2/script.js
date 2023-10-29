function func(arr1, arr2) {
	let res1 = 0;
	
	for (let elem of arr1) {
		res1 += elem;
	}
	
	let res2 = 0;
	
	for (let elem of arr2) {
		res2 += elem;
	}
	
	return res1 / res2;
}

let x = [2, 3, 4];
let y = [6, 8, 4];
console.log(func(x, y));