function msgfn()
{
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var msg = document.getElementById("message").value;

    alert("Your Name: " + name + "\nYour E-Mail: " + email + "\nSubject: " + subject + "\nYour message: " + msg);

}