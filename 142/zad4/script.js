let arr = 123;
let str = String(arr);
let x = 0;
let sum = 0;


if (Number(str) != 0) {
    for (let i = 0; i < str.length; i++) {
      x = Number(str[i]);
      sum = sum + x;
    }
    console.log(sum);
  }
   
  