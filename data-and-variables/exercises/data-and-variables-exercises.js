// Declare and assign the variables below
let name = 'Determination';
let mph = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let mpk = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof name);
console.log(typeof mph);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof mpk);
// Calculate a space mission below
let milesToMars = distanceToMars * mpk ;
let hoursToMars = milesToMars / mph ;
let daysToMars = hoursToMars / 24 ;
// Print the results of the space mission calculations below
console.log("Determination will take " + daysToMars + " days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = distanceToMoon * mpk ;
let hoursToMoon = milesToMoon / mph ;
let daysToMoon = hoursToMoon / 24 ;
// Print the results of the trip to the moon below
console.log("Determination will take " + daysToMoon + " days to reach the Moon.");