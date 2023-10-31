// Write your JavaScript code here.
// Remember to pay attention to page loading!
function get()
{
    const launch = document.getElementById("takeoff");
    const status = document.getElementById("flightStatus");
    const flightScreen = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight")

    const land = document.getElementById("landing");

    const abort = document.getElementById("missionAbort");

    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    const shuttle = document.getElementById("rocket");


    launch.addEventListener('click', event =>
    {
        let answer = window.confirm("Confirm the shuttle is ready for takeoff.");
        if(answer)
        {
            status.innerHTML = "Shuttle in flight."
            flightScreen.style.backgroundColor = "blue";
            let number = Number(height.innerHtml);
            number = 10000;
            height.innerHTML = number;

        }
    });

    land.addEventListener('click', event =>
    {
        window.alert("The shuttle in landing. Landing gear engaged.");
        status.innerHTML = "Shuttle has landed.";
        flightScreen.style.backgroundColor = "green";
        height.innerHTML = 0;
    });

    abort.addEventListener('click', event =>
    {
       let answer = window.confirm("Confirm that you want to abort the mission.")
       if(answer)
       {
            status.innerHTML = "Mission aborted.";
            flightScreen.style.backgroundColor = "green";
        height.innerHTML = 0;
       }
    });

    up.addEventListener('click', event =>
    {
        let goUp = Number(height.innerHTML);
        goUp += 10000;
        height.innerHTML = goUp;
        const currentBottom = parseInt(getComputedStyle(shuttle).bottom);
        shuttle.style.bottom = currentBottom + 10 + "px";
    });

    down.addEventListener('click', event =>
    {
       let goDown = Number(height.innerHTML);
        goDown -= 10000;
        height.innerHTML = goDown;
        const currentBottom = parseInt(getComputedStyle(shuttle).bottom);
        shuttle.style.bottom = currentBottom - 10 + "px";
    });

    left.addEventListener('click', event =>
    {
       const currentLeft = parseInt(getComputedStyle(shuttle).left);
       shuttle.style.left = currentLeft - 10 + "px";
    });

    right.addEventListener('click', event =>
    {
        const currentLeft = parseInt(getComputedStyle(shuttle).left) 
        shuttle.style.left = currentLeft + 10 + "px";
        
    });

}

window.addEventListener("load", get);