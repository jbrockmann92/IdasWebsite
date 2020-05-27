function sendEmail(){
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('subject').value;

    console.log(email, fName, lName, comment);
}