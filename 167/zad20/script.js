let arr = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day = arr[6];
let week = [];

for (let i = 0; i < arr.length - 1; i++) {
week += ' ' + arr[i] + ' ';
}

document.write(week + ' ' + '<i>' + day + ' ' +  '</i>');