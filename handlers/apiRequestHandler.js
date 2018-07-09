var config = require('./config');

exports.randomJoke = function () {

    var options = {
        url: config.randomJokeURL,
        headers: {
            'Accept': 'text/plain'
        }
    }


    return options;
}

exports.sendFormByEmail = function (topic) {

    var transporterObject = {
        host: config.smtpServer,
        port: 587,
        secure: false,
        auth: {
            user: config.emailUser, // generated ethereal user
            pass: config.emailPassword // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    }

    switch (topic) {
        case "transporter_object":
            return transporterObject;
            break;
    }

}