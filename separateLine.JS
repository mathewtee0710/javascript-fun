const prompt = require('prompt-sync')();

let sentence = prompt("Enter a sentence: ");
let word = "";

for (let number = 0; number <= sentence.length; number++) {
	if (number === sentence.length || sentence[number] === " ") {
		if (word !== "") {
			console.log(word);
			word = "";
		}
	} else {
		word += sentence[number];
	}
}
