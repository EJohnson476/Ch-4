//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate
{
    constructor(name,mass,scores)
    {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(score)
    {
        this.scores.push(score);
    }

    average(score)
    {
        let total = 0;
        this.score = score
        for(let i = 0; i < score.length; i++)
        {
            total += score[i];
        }
        let avg = total / score.length ;
        return Math.round(avg * 10) / 10;
    }

    status(avg)
    {
        this.avg = this.average(this.scores);
        if(this.avg > 89)
        {
            return "Accepted";
        }
        else if(this.avg > 79)
        {
            return "Reserve";
        }
        else if(this.avg > 69)
        {
            return "Probationary";
        }
        else(this.avg < 70)
        {
            return "Rejected";
        }
    };
};

let candidate1 = new CrewCandidate('Bubba Bear',135,[88,85,90]);

let candidate2 = new CrewCandidate('Merry Maltese',1.5,[93,88,97]);

let candidate3 = new CrewCandidate('Glad Gator',225,[75,78,62]);

console.log(candidate1);
console.log(candidate2);
console.log(candidate3);

candidate1.addScore(83);
console.log(candidate1.scores);

console.log(candidate1.average(candidate1.scores));
console.log(candidate1.status())

console.log(`${candidate1.name} earned and average of ${candidate1.average(candidate1.scores)}% and has a status of ${candidate1.status()}.`);
console.log(`${candidate2.name} earned and average of ${candidate2.average(candidate2.scores)}% and has a status of ${candidate2.status()}.`);
console.log(`${candidate3.name} earned and average of ${candidate3.average(candidate3.scores)}% and has a status of ${candidate3.status()}.`);

let count = 0;

while(candidate3.average(candidate3.scores) < 100)
{
    candidate3.addScore(100);
    count += 1;
    if(candidate3.average(candidate3.scores) >= 80)
    {
        return console.log(`It would take ${candidate3.name}, ${count} test with a 100% his new average would be ${candidate3.average(candidate3.scores)}. His status is now ${candidate3.status()}`);
    }
}

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.