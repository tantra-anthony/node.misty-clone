var firebaseMethods = require('../firebase/firebaseMethods');
var textMessage = require('../templates/messageTemplate')

//all sensitive information replaced with ####

module.exports = function (paramName, req, res) {
    
    var topReference = '####';
    var key = '####';
    var param = paramName;

    var suggestionRelatedArray = [
        "Booking of Amphithetre",
        "How to book the Tembusu Lobby",
        "How to book Sem Room 6",
        "Make booking for MPH"
    ];

    var suggestionRelated = suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];


    console.log(param);
    console.log('searchBooking initiated');

    var promise = Promise.resolve(firebaseMethods.getChildAtOneNode(topReference, key, paramName));

    promise.then(function(description) {
        
        if (description != null) {

            var responseArray = [
                "Misty suggests that hooman contact " + description + "! This lovely hooman will help you!",
                "Please contact " + description + "! This hooman will definitely know what to do!",
                "Hooman should contact " + description + "! This hooman is awesome and will help you out!",
                description + " will help you! Do contact him through this platform!",
                description + " is the hooman for you! Just contact this hooman!",
                "Misty is sure that " + description + " can help you with your request!",
                "Misty is 99% sure that " + description + " will help you if you ask!"
            ];
    
            var bookingResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
    
            console.log('bookingResponses: ' + bookingResponse);
            res.send(textMessage.messageWithMarkdownSuggestion(bookingResponse, suggestionRelated));

        } else {

            var nullResponseArray = [
                "It seems that Misty is having a hard time processing this request! Hooman can visit [this link](https://tinyurl.com/mistyform) to submit a report!",
                "Misty cannot seem to process this request, hooman! Please fill in [this form](https://tinyurl.com/mistyform) to submit a report!",
                "Misty encountered an error! Please submit a report by filling up [this form](https://tinyurl.com/mistyform), hooman!"
            ]

            var nullResponse = nullResponseArray[Math.floor(Math.random() * nullResponseArray.length)];

            res.send(textMessage.messageWithMarkdownSuggestion(nullResponse, suggestionRelated));

        }
    })
}