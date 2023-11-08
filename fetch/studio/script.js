//TODO: Add Your Code Below
 window.addEventListener('load', event=>
 {
   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response)
   {
    let container = document.getElementById('container');
    response.json().then(function(json)
    {
        console.log(json);
        json.forEach(function(json)
    {
            container.innerHTML += 
            `<div class="astronaut">
            <div class="bio">
                <h3>${json.firstName} ${json.lastName}</h3>
                <ul>
                <li>Hours in space: ${json.hoursInSpace}</li>
                <li>Active: ${json.active}</li>
                <li>Skills: ${json.skills}</li>
                </ul>
            </div>
            <img class="avatar" src="images/mae-jemison.jpg">
        </div>`
        })
    });
   });
 })