const prompt = require('prompt-sync')();

let word = prompt("Enter a word: ");
let reversed = "";

for (let number = word.length - 1; number >= 0; number--) {
	reversed += word[number];
}

console.log(reversed);
