var stringProcess = require('../strings/stringPreprocessing');
var textMessage = require('../templates/messageTemplate');
var firebaseHandlers = require('../firebase/firebaseHandlers');
var firebaseMethods = require('../firebase/firebaseMethods');
var apiRequestHandler = require('../handlers/apiRequestHandler');
var nodemailer = require('nodemailer');

exports.sendByLink = function(formType, res) {
    var topReference = firebaseHandlers.firebaseReferences('send_form_reference');
    var key = firebaseHandlers.firebaseReferences("generic_key");
    var param = formType;

    var suggestionRelated = stringProcess.searchByPosition("suggestion_related");
    
    console.log(param);
    console.log('sendByLink initiated');

    firebaseMethods.getChildAtOneNode(topReference, key, formType).then(function(result) {
        if (result != null) {
            var headerResponse = stringProcess.headerTopic("send_form_by_link");
            var urlPlaceholder = stringProcess.sendFormURLPlaceholder(formType);
            console.log(result);
            res.send(textMessage.messageWithOneLink(headerResponse, urlPlaceholder, result));
        } else {
            var nullResponse = stringProcess.firebaseNullResponse();
            res.send(textMessage.messageWithMarkdownSuggestion(nullResponse, suggestionRelated));            
        }
    })
}

exports.sendByEmail = function(formType, email, res) {
    console.log("sendByEmail initiated");

    var subjectField = "Here is your " + stringProcess.sendFormURLPlaceholder(formType);
    var pathToFile = stringProcess.sendFormPathToFile(formType);
    var transporter = nodemailer.createTransport(apiRequestHandler.sendFormByEmail("transporter_object"));

    var mailOptions = {
        from: '"Misty the Cat 🐱" <no-reply@gmail.com>', // sender address
        to: email, // list of receivers
        subject: subjectField, // Subject line
        text: 'You have been visited by Misty the Cat! 🐈🐈', // plain text body

        attachments: [
            {
                path: pathToFile
            }
        ]
    }

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            var nullResponse = stringProcess.firebaseNullResponse();
            console.log(err);
            res.send(textMessage.messageWithMarkdown(nullResponse));
        } else {
            console.log(info.messageId);
            var response = stringProcess.sendFormSuccessMessage();
            console.log("success");
            console.log(textMessage.messageWithMarkdown(response));
            res.send(textMessage.messageWithMarkdown(response));
        }

    })
    
}

exports.fallbackEmail = function(res) {
    var message = stringProcess.sendFormFallbackEmail();
    res.send(message);
}