//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let startingFuel = 0;
let crewSize = 0;
let shuttleHeight = 0;
let info = 0;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  while (info > 30000 || info < 5000)
  {
    info = input.question("What is the starting fuel level? ");
    if(Number(info) > 0 && Number(info) > 5000 && Number(info) < 30000)
    {
      startingFuel = Number(info);
    }
    else
    {
      console.log("Please enter a positive interger between 5000 and 30000");
    }
  }
  
//console.log(startingFuel);


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  while (crewSize <= 0 || crewSize > 7)
  {
    info = input.question("What is the size of the crew? ");
    if(Number(info) > 0 && Number(info) <= 7)
    {
      crewSize = Number(info);
      console.log(`Crew size is: ${crewSize}`);
    }
    else
    {
      console.log("Please enter a number between 1 and 7");
    }
  }
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuel > 5000)
{
  startingFuel = startingFuel - (100 * crewSize);
  shuttleHeight = shuttleHeight + 50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
  console.log(`The shuttle gained an altitude of ${shuttleHeight} km.`);
  if(shuttleHeight >= 2000)
  {
    console.log("Orbit achived!");
  }
  else
  {
    console.log("Failed to reach orbit.");
  }