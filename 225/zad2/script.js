function func1() {
	console.log('!');
}

let func2 = func1;  

// Проверим:
func1(); //выведет '!'
func2(); //выведет '!'