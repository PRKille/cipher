// Back-end logic:

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

var jumble;
function jumbleLetters(firstLetter, lastLetter, sentenceInput) {
	return jumble = sentenceInput + lastAndFirst(firstAndLast(firstLetter, lastLetter));
}

jumbleLetters(firstLetter, lastLetter, sentenceInput);

console.log(jumble);

var superJumble;
function randomLetter(sentenceInput, jumble) {
	return 	superJumble = sentenceInput.charAt((sentenceInput.length / 2).toFixed(0)) + jumble;
}

randomLetter(sentenceInput, jumble);

console.log(superJumble);

var reverseJumble = superJumble.split("").reverse().join("");

// front-end logic:

$(document).ready(function() {
   $("#well1").click(function() {
    $("#sentence").text(sentenceInput).show();
    $("#result").hide();
  });
  $("#well2").click(function() {
    $("#result").text(reverseJumble).show();
    $("#sentence").hide();
  });
});