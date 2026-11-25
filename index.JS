const prompt = require('prompt-sync')();

let word = prompt("Enter a word: ");

for (let number = 0; number < word.length; number++) {
	if (number % 2 === 0) {
		console.log(word[number]);
	}
}
