function test(func1, func2, func3) {
	console.log( func1() + func2() + func3()); // выведет 3
}

function func1() {return 1;}
function func2() {return 2;}
function func3() {return 3;}
  
test(func1, func2, func3);
