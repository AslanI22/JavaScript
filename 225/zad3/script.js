function func1() {
	return 12;
}

let func2 = func1;  

// Проверим:
console.log(Number(func1()) + Number(func2()));

