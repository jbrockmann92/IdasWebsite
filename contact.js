function sendEmail(){
    var nodemailer = require('nodemailer');

    requirejs.config({
        //Pass the top-level main.js/index.js require
        //function to requirejs so that node modules
        //are loaded relative to the top-level JS file.
        nodeRequire: require
    });

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'idasengineering@gmail.com',
        pass: 'IdasPass123'
    }
    });

    var mailOptions = {
    from: 'idasengineering@gmail.com',
    to: 'jacob.brockmann92@gmail.com',
    subject: 'Testing for NodeMailer',
    text: document.getElementById('subject'),
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}