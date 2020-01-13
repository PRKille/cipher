var sentenceInput = prompt("Please Enter a Sentence.");

console.log(sentenceInput);

var firstLetter = sentenceInput.charAt(0);
var lastLetter = sentenceInput.charAt(sentenceInput.length-1);

var firstLast;
function firstAndLast(firstLetter, lastLetter) {
	return firstLast = firstLetter.concat(lastLetter).toUpperCase();
}

firstAndLast(firstLetter, lastLetter);

console.log(firstLast);

var lastFirst;

function lastAndFirst(firstLast) {
	return lastFirst = firstLast.charAt(1) + firstLast.charAt(0);
}

lastAndFirst(firstLast);

console.log(lastFirst);