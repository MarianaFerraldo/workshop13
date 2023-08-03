//Tab Only Odds
//Define Const Arrays 
//Deine Odd 
//print odds 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odds = [];
for (let index = 0; index < numbers.length; index++) {
    if ( numbers[index] % 2 === 1) {
        odds.push(numbers[index]);
    }
}
console.log(odds);

//code that accepts a string of lowercase letters
//def two variables 

const vowels = ["a", "e", "i", "o", "u"];
const word = "hello";

let cons = 0;
let vowl = [];

    for(let index = 0; index < word.length; index++){
        const char = word[index];
        if (vowl.includes(char)) {
            vowl.push(char);
        } else if (char >="a" && char <= "z") {
            cons++
        }
    }
    console.log("Hello has " + cons + " consonants and " + vowl.length + " vowels.");

//Reverse Aarray 
//define var 
//define revese 

const num2 = [1, 3, 5, 7, 9, 11];
const reverse2 = []

for (let index = num2.length -1; index >= 0; index--) {
    const valueAtIndex = num2[index]
    
    reverse2.push(valueAtIndex)
}
console.log(reverse2)


//fizz
//Create a JavaScript code that prints each number from 1 to 100 on a new line.
//For each multiple of 3, print "Fizz" instead of the number.
//For each multiple of 5, print "Buzz" instead of the number.
//For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
const numbers1 = [];

for (let index = 1; index <= 100; index++) {
    if (numbers1 % 3 === 0 && numbers1 % 5 === 0) {
      console.log("FizzBuzz");
    } else if (numbers1 % 3 === 0) {
      console.log("Fizz");
    } else if (numbers1 % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(numbers1);
    }
}