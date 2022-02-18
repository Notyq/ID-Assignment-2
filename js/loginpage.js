const APIKEY = "620e79e534fd62156585874a";

//Login Page API
$(document).ready(function (){
    $("#loginid").on("click",function(e){
        e.preventDefault();

        var loginSuccess = false;

        let loginemail = $("#loginemail").val();
        let loginpassword = $("#loginpassword").val();

        console.log(loginemail);
        console.log(loginpassword);

        let inputdata ={
            "email": loginemail,
            "password": loginpassword
        }


        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2databaselogin-8a41.restdb.io/rest/signuplogin",
        "method": "GET",
        "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
        }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            console.log(`${response[0].email}`, `${response[0].password}`);

            for(let i=0; i < response.length; i++){
                console.log(`${response[i].email}`, `${response[i].password}`);
                if(`${response[i].email}` === loginemail && `${response[i].password}` === loginpassword){
                    loginSuccess = true;
                    alert("Login Success!\nClick OK to be redirected to the home page")
                    window.location.href = "Home.html";
                    break;
                }

            }

            if (loginSuccess === false){
                alert("Login Failed, Invalid Email or Password")
            }



        });


    });
})



//Sign Up Page API 
$(document).ready(function () {
    $("#signupid").on("click",function(e) {
        e.preventDefault();

        var uniqueemail =  null;
        console.log(uniqueemail);

        let email = $("#email").val();
        let emailconfirm = $("#emailconfirm").val();
        let password = $("#password").val();
        let passwordconfirm = $("#passwordconfirm").val();

        console.log(email);
        console.log(emailconfirm);
        console.log(password);
        console.log(passwordconfirm);
        
        

        if(email === emailconfirm && password === passwordconfirm){

            if(email.includes("@")){

                var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://idasg2databaselogin-8a41.restdb.io/rest/signuplogin",
                "method": "GET",
                "headers": {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
                }
                }
                
                $.ajax(settings).done(function (response){
                    console.log(response);
                    for(let i=0; i < response.length; i++){

                        if(`${response[i].email}` === email){
                            
                            console.log('------------------');
                            console.log(`${response[i].email}`);
                            console.log(typeof(`${response[i].email}`));
                            console.log(email);
                            console.log(typeof(email));
                            var uniqueemail = false;
                            break;

                        }else{
                            var uniqueemail = true;
                        }

                        
                    }

                    console.log(uniqueemail);

                    if(uniqueemail === true){

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
        
                        //window.location.href = "LogInPage.html";
                        alert("Account Created!")
                    }
    
                    else if (uniqueemail === false){
                        alert("Email is already in use!")
                    }


                });

                
                
            }

            else{
                alert("Key in a valid email address")
            }
            

        }

        else{
            alert("Email or Password Does Not Match");
        }

        

    });

})



