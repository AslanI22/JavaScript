let arr = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
];



for (let func of arr) {
	if (func() == '3') {
		console.log(func());
	} 
}