let num = 25;
let sum = 0;
if (num >= 10 && num <= 99) {
	sum = Math.floor(num / 10) + num % 10; 
	if (sum <= 9) {
	  console.log(sum);
	} else {
	  console.log(sum);
	}
  } else {
	console.log("Число не попадает в диапазон от 10 до 99");
  }
  