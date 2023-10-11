
let launchcode = {
  organization : "nonprofit",
  executiveDierector : "Jeff",
  percentageCoolEmployees : 100,
  programsOffered : ["Web Development" , "Data Analysis", "Liftoff"],
  launchOutput : function (number)
  {
    number = Number(number);

    if(number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0)
    {
        return "Rutabagas! That doesn't work."
    }

    if(number % 2 === 0 )
    {
        if(number % 3 === 0)
        {
            if(number % 5 === 0)
            {
                return "LaunchCode Rocks!";
            }
            else
            {
                return "LaunchCode!";
            }
        }

        else if (number % 5 === 0)
        {
            return "Launch Rocks! (CRASH!!!!)";
        }

        else
        {
            return "Launch!";
        }
    }
    else if(number % 3 === 0 )
    {
        if(number % 5 === 0)
        {
            return "Code Rocks!";
        }
        else
        {
            return "Code!"
        }
    }
    else if(number % 5 === 0 )
    {
        return "Rocks!";
    }
  }
}
console.log(launchcode.launchOutput(15));
module.exports = launchcode;

