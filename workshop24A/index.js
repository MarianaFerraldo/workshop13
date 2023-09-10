//Assign a function to a variable and use it to convert a string to uppercase.
const welcome = "welcome";

function upper (welcome) {
    return welcome.toUpperCase();

}
console.log(upper(welcome));


//Create a function that takes a number as input and returns another function that multiplies its input with the original number.
const num1 = twoNumbers(3);
const num2 = num1(7);

function twoNumbers (a) {
    return function (b) {
        return a * b
    }
}
console.log(num2);



//Create a function that takes two numbers as input and returns an object.
function createObj (a, b) {
    const add1 = obj1 + 2;
    const add2 = obj2 + 4;

    const result = {
        number1: add1,
        number2: add2
    };
    return result;
}
const obj1 = 5;
const obj2 = 5;
const result = createObj(obj1, obj2);

console.log(result.number1);
console.log(result.number2);

/* HIGER-ORDER FUNCTIONS*/

//Converts all string elements to lowercase
const phrase = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];

function lowerCase (arr) {
    const lowerCaseArr =[];
    for (let i = 0; i < arr.length; i++) {
        lowerCaseArr.push(arr[i].toLowerCase());
    }
    return lowerCaseArr;
}
const lowerCasePhrase = lowerCase(phrase);
console.log(lowerCasePhrase);

//Print a string that has a length of more than 11 characters.

function moreThan (arr) {
    const resultArray = [];
for(let i =0; i < arr.length; i++) {
    if (arr[i].length > 11) {
        resultArray.push(arr[i])
    }
}
return  resultArray;
}

const eleven = moreThan(phrase);
console.log(eleven);

//Create a function using a callback that takes a string as input and returns the string in reverse order.

function reverse(arr) {
    const reverseArr = arr.map(word => word.split("").reverse().join(""));
    return reverseArr;
  }
  
  const reversing = reverse(phrase);
  console.log(reversing);

//reate two functions. One function generates runners with specific speeds, and the other simulates a race between two runners over a specified distance. Return the winner's name or 'It's a tie!' if both runners finish simultaneously.

  function generateRunner(speed, name) {
    return {
      name: name,
      speed: speed,
    };
  }

  function simulateRace(runner1, runner2, raceDistance) {
    const timeRunner1 = raceDistance / runner1.speed;
    const timeRunner2 = raceDistance / runner2.speed;
  
    if (timeRunner1 < timeRunner2) {
      return runner1.name + ' wins!';
    } else if (timeRunner2 < timeRunner1) {
      return runner2.name + ' wins!';
    } else {
      return "It's a tie!";
    }
  }

const runnerA = generateRunner(10, 'Runner A'); 
const runnerB = generateRunner(12, 'Runner B');

const raceDistance = 1000; 
const winner = simulateRace(runnerA, runnerB, raceDistance);

console.log(winner);

/* CURRYNG FUNCTION  */

function createURL(protocol, subdomain, domain, tld, endpoint) {
    const url = `${protocol}${subdomain}.${domain}.${tld}${endpoint}`;
    return url;
  }
  
  const url1 = createURL('https://', 'www', 'fullstackacademy', 'com', '/weather');
  const url2 = createURL('https://', 'www', 'fullstackacademy', 'com', '/stocks');
  
  console.log(url1);
  console.log(url2);