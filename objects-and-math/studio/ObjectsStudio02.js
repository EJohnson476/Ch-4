// Code your orbitCircumference function here:
function orbitCircumference ()
{
  let circumference = (2 * Math.PI * R);
  return circumference;
}

// Code your missionDuration function here:
function missionDuration (orbits, orbitRadius = 2000, orbitSpeed = 28000)
{
  let time = Math.round((orbits * (orbitRadius / orbitSpeed)) * 100) / 100 ;
  let distance = orbits * orbitRadius;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.  `);
  return time;
}
//(missionDuration(5,2000,28000));
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry (arr)
{
  let newArr = [];

while(newArr.length < 3)
{
  let index = (arr[Math.floor(Math.random() * arr.length)]);
  if(!newArr.includes(index))
  {
    newArr.push(index);
  }
}
return newArr;
};

// Code your oxygenExpended function here:
function oxygenExpended(object,oR,oS)
{
  let duration = missionDuration(3,oR,oS);
  let oxygen = Math.round((object.o2Used(duration)) * 1000) / 1000;
  return console.log(`${object.name} will preform the spacewalk, which will last ${duration} hours and require ${oxygen} kg of oxygen. `)
};

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 oxygenExpended(candidateA,8000,30000);