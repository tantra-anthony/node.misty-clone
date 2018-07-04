var firebaseMethods = require('../firebase/firebaseMethods');
var textMessage = require('../templates/messageTemplate')
var firebaseHandlers = require('../firebase/firebaseHandlers');
var stringProcess = require('../strings/stringPreprocessing');

module.exports = function (res) {
    var topReference = firebaseHandlers.firebaseReferences('send_trivia');
    var suggestionRelated = stringProcess.sendTrivia("suggestion_related");
    console.log('sendTrivia initiated');

    firebaseMethods.getAllChildValuesAsArray(topReference).then(function (result) {
        if (result != null) {
            var message = stringProcess.getRandomFromArray(result);
            console.log('trivia: ' + message);
            res.send(textMessage.messageWithMarkdownSuggestion(message, suggestionRelated));
        } else {
            var nullResponse = stringProcess.firebaseNullResponse();
            res.send(textMessage.messageWithMarkdownSuggestion(nullResponse, suggestionRelated));
        }
    })
}