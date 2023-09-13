// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:

// I predict it will out put engines are off

if (engineIndicatorLight === "green") {
   console.log("Engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("Engines are preparing to start");
} else {
   console.log("Engines are off");
}

// check if crew is ready
if (crewStatus === true)
{
   console.log("Crew ready");
}
else
{
   console.log("Crew not ready");
}

// check computer status
if (computerStatusCode === 200)
{
   console.log("Please stand by. Computer is rebooting.");
}
else if (computerStatusCode === 400)
{
   console.log("Success! Computer online!");
}
else
{
   console.log("ALERT: Computer offline!");
}

// Check shuttle speed
if (shuttleSpeed > 17500)
{
   console.log("ALERT: Escape velocity reached!");
}
else if (shuttleSpeed < 8000)
{
   console.log("ALERT: Cannot maintain orbit!");
}
else
{
   console.log("Stable speed.");
}

// Monitor shuttle's fuel status
if (fuelLevel < 1000 || engineTemp > 3500 || engineIndicatorLight === "red blinking")
{
   console.log("ENGINE FAILURE IMMINENT!");
}
else if (fuelLevel <= 5000 || engineTemp > 2500)
{
   console.log("Check fuel level. Engines running hot.");
}
else if (fuelLevel > 5000 && engineTemp <= 2500)
{
   if(fuelLevel > 10000)
   {
      console.log("Fuel level above 50%. Engines good.");
   }
   else if (fuelLevel > 20000)
   {
      console.log("Full tank. Engines good.");
   }
   else
   console.log("Fuel level above 25%. Engines good.");
}
else
{
   console.log("Fuel and engine status pending...");
}

