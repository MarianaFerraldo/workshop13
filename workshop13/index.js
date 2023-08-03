// define a variable 
// use console to print 
const IamAstring = "I am a string";

if (IamAstring) {
    console.log(true);
}
 else {
   if (IamAstring === false) {
      console.log("The boolean value false is falsy");
   }
   else if (IamAstring === null) {
      console.log("The null value is falsy");
 }
   else if (IamAstring === undefined) {
      console.log("undefined is falsy");
   }
   else if (IamAstring === 0) {
      console.log("The number 0 is falsy (the only falsy number)");
   }
   else if (IamAstring === "") {
      console.log("The empty string is falsy (the only falsy string)");
   }
}

//Tab Number Line
//Define variable 
//Define sum and print 
let num1 = 50;
let num2 = 51;
let sum = num1 + num2;

if (sum < -1000) {
   console.log(sum + " is greater than 100");
}
else {
if (sum < 0) {
      console.log(sum + "is a negative number");
   }
else if (sum === 0) {
   console.log(sum + " is equal to 0");
}
else if (sum > 0){
   console.log(sum + " is larger than 0");
}
else if (sum > 100) {
   console.log(sum + " is greater than 100");
}
}

//Tab Greater than 5
//need to define variable 
//print the correct results
let numb1 = 10;
let numb2 = 11;

if (numb1 > 5 && numb2 > 5) {
   console.log(true);
} else {
   console.log(false);
}


//Tab Pair and Compare 
//Set a Variable and Pair
//Print at least one true 
let param1A = "cat";
let param1B = "cat";
let param2A = 6;
let param2B ="6";

if (param1A === param1B || param2A === param2B) {
   console.log(true);
} else {
   console.log(false);
}
