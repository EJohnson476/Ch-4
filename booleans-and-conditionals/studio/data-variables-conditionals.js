// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maxiumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = "true";

console.log(date + "\n" + time);
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7)
{
    console.log(`Astronaut count: ${astronautCount}`)

// add logic below to verify all astronauts are ready
    if (astronautStatus === "ready")
{
    console.log(`Crew Mass: ${crewMassKg} Kg\nFuel Mass: ${fuelMassKg} Kg`)
    // add logic below to verify the total mass does not exceed the maximum limit of 850000
    if (totalMassKg < 850000)
    {
        console.log(`Shuttle Mass: ${shuttleMassKg} Kg\nTotal Mass: ${totalMassKg} Kg`)
        // add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
        if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150)
        {
            console.log(`Fuel Temp: ${fuelTempCelsius} C`)
            // add logic below to verify the fuel level is at 100%
            if (fuelLevel === "100%")
            {
            // add logic below to verify the weather status is clear
                if (weatherStatus === "clear")
                {
                    console.log(`Weather Status: ${weatherStatus}\nHave a safe trip astronauts!`)
                }
                // Verify shuttle launch can proceed based on above conditions
            }
            else
{
    console.log("Launch scrubbed");
}
        }
        else
{
    console.log("Launch scrubbed");
}
    }
    else
{
    console.log("Launch scrubbed");
}
}
else
{
    console.log("Launch scrubbed");
}
}
else
{
    console.log("Launch scrubbed");
}