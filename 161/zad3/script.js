let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

let obj1 = {};

for (let key in obj) {
	obj1[obj[key]] = key;
}
console.log(obj1);

