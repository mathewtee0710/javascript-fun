const prompt = require('prompt-sync')();

let target = Number(prompt("Enter target: "));

for (let a = 1; a <= 9; a++) {
	for (let b = a + 1; b <= 9; b++) {
		for (let c = b + 1; c <= 9; c++) {
			if (a + b + c === target) {
				console.log(a + ", " + b + ", " + c);
			}
		}
	}
}
