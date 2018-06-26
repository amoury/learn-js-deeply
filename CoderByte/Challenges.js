/* 
CHALLENGE 1
*/

function FirstReverse(str) {
  return str.split('').reverse().join('');
}

FirstReverse("Ansar is a good boy");


/* 
CHALLENGE 2
Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
*/

function LetterChanges(str) {
 str = str.replace(/[a-zA-Z]/g, function(ch) {
   if(ch === 'z') return 'a';
   else if (ch === 'Z') return 'A';
   else return String.fromCharCode(ch.charCodeAt(0) + 1);
 });

  return str.replace(/[aeiou]/g, function (ch) {
    return ch.toUpperCase();
  });
}


console.log(LetterChanges("Ansar Memon34"));


/* 
Challenge 3
Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.
*/
var initial = 0;
function SimpleAdding(num) {

  for (var i = 0; i <= num; i++) {
    initial += i;
  }

  // code goes here  
  return initial;

}

console.log(SimpleAdding(10));


/* 
Challenge 4
Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
*/

function LetterCapitalize(str) {

  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });
}

console.log(LetterCapitalize("ansar memon"));
