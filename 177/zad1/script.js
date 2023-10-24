let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

let summ = 0;
for (let key in obj) {
	let subObj = obj[key];
	
	for (let subKey in subObj) {
		summ += subObj[subKey];
	}
}
console.log(summ);