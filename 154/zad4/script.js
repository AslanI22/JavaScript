let result = 0;

for (i = 1; i < 100; i++) {
  result = result + i;
  if (result>100) {
    break;
  }
}
console.log(i);