function func1() {
	return 12;
}

let func2 = func1;  

// Проверим:
alert(Number(func1()) + Number(func2()));

