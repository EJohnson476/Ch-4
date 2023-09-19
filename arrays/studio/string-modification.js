const input = require('readline-sync');
let str = "LaunchCode";
let info = input.question("How many characters should I move to the end? ");
let anotherStr;
let newStr;

if((info <= str.length))
{
    newStr = (str.slice(info, str.length));
    anotherStr = (newStr + str.slice(0 , info));
    console.log(`The original string was ${str} and the modified string is ${anotherStr}`);
}
else
{
 info = 3;
 newStr = (str.slice(info, str.length));
 anotherStr = (newStr + str.slice(0 , info));
 console.log(`There was an error in your input, resorted to default of 3. The original string was ${str} and the modified string is ${anotherStr}`);
}

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//newStr = (str.slice(info, str.length));
//console.log(newStr);
//anotherStr = (newStr + str.slice(0 , info));
//console.log(anotherStr);
// = str.slice(0,str.length - 3);
//Use a template literal to print the original and modified string in a descriptive phrase.
//console.log(`The original string was ${str} and the modified string is ${anotherStr}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
//let info = input.question("How many characters should I move to the end");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
