let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return Math.floor(Math.random()*11)}
};

let superChimpTwo = 
{
   name: 'Brad',
   species: 'Chimpanzee' ,
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {return Math.floor(Math.random()*11)}
};

let dogOne = 
{
   name: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return Math.floor(Math.random()*11)}
};

let arthropodOne = 
{
   name: 'Almina',
   species: 'Tradigrade',
   mass:0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, salamander, superChimpTwo, dogOne, arthropodOne];

function crewsReport(object)
{
     return console.log(`${object.name} is a ${object.species}. They are ${object.age} years old and ${object.mass} kilograms. Their ID is ${object.astronautID}.`);
}

crewsReport(salamander);

function fitnessTest(arr)
{
   let results =[];
   for(let i = 0; i < arr.length; i++)
   {
      numSteps = 0;
      turns = 0;
      while(numSteps < 20)
      {
         numSteps += arr[i].move();
         turns++;
      }
      results.push(`${arr[i].name} took ${turns} turns to take 20 steps`)
   }
   return results;
}

console.log(fitnessTest(crew));

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!