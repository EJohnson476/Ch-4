//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing.

console.log(language.charAt(language.search("J")) + language.charAt(language.search("S")));
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
initals = (language.slice(0,1) + language.slice(4,5));
console.log(`The abbreviation for ${language} is ${initals}`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result
language = language.toUpperCase();
language = (language.substring(language.search("J"),language.search("S"))); 
console.log(language);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
notTitleCase = (notTitleCase.replace("title case","Title Case"));
console.log(notTitleCase);