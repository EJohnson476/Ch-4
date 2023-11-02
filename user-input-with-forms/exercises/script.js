//Code Your Solution Below
window.addEventListener("load", function()
{
    let form = document.querySelector('form');
    form.addEventListener('submit', function(event)
    {
        let var1 = document.querySelect("input[name=testName]");
        let var2 = document.querySelect("date[name=testDate]");
        let var3 = document.querySelect("select[name=rocketType]");
        let var4 = document.querySelect("number[name=boosterCount]");
        let var5 = document.querySelect("radio[name=windRating]");
        let var6 = document.querySelect("checkbox[name=productionServers]");
        if(var1.value === "" || var2.value === "" || var3.value === "" || var4.value === "" || var5.value === "" || var6.value === "on" ||)
        {
            alert("You must fill all options.")
            event.preventDefault();
        }
    });
});