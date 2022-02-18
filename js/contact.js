const APIKEY = "620e578234fd621565858735";

$(document).ready(function () {
    $("#feedbackformsubmit").on("click",function(e) {
        e.preventDefault();


        let name = $("#fname").val();
        console.log(name);
        let email = $("#email").val();
        console.log(email);
        let subject = $("#subject").val();
        console.log(subject);
        let message = $("#message").val();
        console.log(message);
        
        let jsondata ={
            "name": name,
            "email": email,
            "subject": subject,
            "message": message
        }
        
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2database-a96a.restdb.io/rest/feedbackform",
        "method": "POST",
        "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
        }

        $.ajax(settings).done(function (response) {
        console.log(response);
        });



    });

})


function msgfn()
{
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var msg = document.getElementById("message").value;

    

    alert("Your Name: " + name + "\nYour E-Mail: " + email + "\nSubject: " + subject + "\nYour message: " + msg);

}


