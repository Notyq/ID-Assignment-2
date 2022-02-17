const APIKEY = "620e79e534fd62156585874a";


$(document).ready(function () {
    $("#signupid").on("click",function(e) {
        e.preventDefault();

        let email = $("#email").val();
        let emailconfirm = $("#emailconfirm").val();
        let password = $("#password").val();
        let passwordconfirm = $("#passwordconfirm").val();

        console.log(email);
        console.log(emailconfirm);
        console.log(password);
        console.log(passwordconfirm);
        

        if(email === emailconfirm && password === passwordconfirm){
            

            let jsondata ={
                "email": email,
                "password": password,
            }

            var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2databaselogin-8a41.restdb.io/rest/signuplogin",
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


        }

        else{
            alert("Enter correct values");
        }

        
        



    });

})

