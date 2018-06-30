var request = require('request');
var textMessage = require('../templates/messageTemplate');
var stringProcess = require('../strings/stringPreprocessing');
var apiHandler = require('../handlers/apiRequestHandler');

module.exports = function() {
    console.log("randomJoke initiated");

    var suggestionRelated = stringProcess.randomJoke('suggestion_related');

    request.get(apiHandler.randomJoke(), function(error, response, body){

        return textMessage.messageWithMarkdownSuggestion(body, suggestionRelated);

    })
}