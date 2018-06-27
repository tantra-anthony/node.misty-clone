var firebaseMethods = require('../firebase/firebaseMethods');
var textMessage = require('../templates/messageTemplate');

//all sensitive information replaced with ####

module.exports = function (paramName, req, res) {
    
    var topReference = '####';
    var key = '####';
    var param = paramName;

    var suggestionRelatedArray = [
        "Al Amaan's phone number",
        "McDonald's phone number",
        "KFC's number",
        "Do you have ameens number?",
        "McD number"
    ];

    var suggestionRelated = suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];

    console.log(param);
    console.log('searchPhoneNumber initiated');

    var promise = Promise.resolve(firebaseMethods.getChildAtOneNode(topReference, key, paramName));

    promise.then(function(description) {
        
        if (description != null) {

            var responseArray = [
                "Here you go, hooman! " + description,
                "Misty thinks it's " + description,
                "Here, hooman! " + description,
                description + " is probably the correct one!",
                description + " is the number for hooman!",
                "Misty is sure that it's " + description,
                "Misty is 99% sure that it's " + description
            ];
    
            var phoneNumberResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
    
            console.log('phoneNumberResponses: ' + phoneNumberResponse);
            res.send(textMessage.messageWithMarkdownSuggestion(phoneNumberResponse, suggestionRelated));

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