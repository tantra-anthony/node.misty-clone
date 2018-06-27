var request = require('request');
var textMessage = require('../templates/messageTemplate');

var options = {
    url: 'https://icanhazdadjoke.com/',
    headers: {
        'Accept': 'text/plain'
    }
}

module.exports = function(req, res) {
    console.log("randomJoke initiated");

    var suggestionRelatedArray = [
        "Give me another joke please",
        "Send me one more joke please",
        "Tell me another joke"
    ];

    var suggestionRelated = suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];


    request.get(options, function(error, response, body){

        res.send(textMessage.messageWithMarkdownSuggestion(body, suggestionRelated));

    })
}