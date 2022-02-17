function msgfn()
{
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var msg = document.getElementById("message").value;

    alert("Your Name: " + name + "\nYour E-Mail: " + email + "\nSubject: " + subject + "\nYour message: " + msg);

}

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(this);

    fetch('form.php', {
        method: 'post',
        body: formData
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function(error){
        console.error(error);
    })

});