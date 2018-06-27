var firebaseMethods = require('../firebase/firebaseMethods');
var textMessage = require('../templates/messageTemplate');

//all sensitive information replaced with ####

module.exports = function (paramName, req, res) {

    var topReference = '####';
    var key = '####';
    var param = paramName;

    var suggestionRelatedArray = [
        "Who is the Ponya House Captain?",
        "Who is Ora Residential Fellow?",
        "Who is the CSC Sports Director"
    ];

    var suggestionRelated = suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];


    console.log(param);
    console.log('searchByPosition initiated');

    var promise = Promise.resolve(firebaseMethods.getChildAtOneNode(topReference, key, paramName));

    promise.then(function (description) {

        if (description != null) {

            var responseArray = [
                "Misty is pretty sure it's " + description + "!",
                "Misty thinks this person is " + description + "!",
                "Hmm... Misty is quite sure that it's " + description + "!",
                description + " is probably the person that hooman is looking for!",
                description + "! Misty is quite sure!",
                "Misty guesses that it's " + description,
                "Misty is 99% sure that this person is " + description,
                "Misty can probably guess that this person is " + description
            ];

            var positionResponse = responseArray[Math.floor(Math.random() * responseArray.length)];

            console.log('positionResponses: ' + positionResponse);

            res.send(textMessage.messageWithMarkdownSuggestion(positionResponse, suggestionRelated));

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