let num = 1001;
let i = 0;
//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let str = num.toString();
console.log(str);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let otherNum = 123.45;
let otherStr = otherNum.toString();
console.log(otherStr.length);
let newStr = otherStr.replace(".","");
console.log(newStr);
console.log(newStr.length);

//otherStr.replace(".","");
//otherStr = otherNum;
//console.log(otherStr.length);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if(otherStr.indexOf(".") === -1)
{
    console.log(otherStr);
}
else
{
    let anotherStr = otherStr.replace(".","");

}