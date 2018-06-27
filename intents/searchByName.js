var firebaseMethods = require('../firebase/firebaseMethods');
var textMessage = require('../templates/messageTemplate')

//all sensitive information replaced with ####

module.exports = function (paramName, req, res) {
    
    var topReference = '####';
    var key = '####';
    var param = paramName;

    var suggestionRelatedArray = [
        "Who is Anthony Tantra",
        "Who is Tommy Koh",
        "Who is Yee Han?"
    ];

    var suggestionRelated = suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];


    console.log(param);
    console.log('searchByName initiated');

    var promise = Promise.resolve(firebaseMethods.getChildAtOneNode(topReference, key, paramName));

    promise.then(function(description) {

        if (description != null) {
            
            console.log('description: ' + description);
            res.send(textMessage.messageWithMarkdownSuggestion(description, suggestionRelated));
            
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