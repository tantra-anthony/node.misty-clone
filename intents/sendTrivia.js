var firebaseMethods = require('../firebase/firebaseMethods');
var textMessage = require('../templates/messageTemplate')
var firebaseHandlers = require('../firebase/firebaseHandlers');
var stringProcess = require('../strings/stringPreprocessing');

module.exports = function (res) {
    var topReference = firebaseHandlers.firebaseReferences('send_trivia');
    var suggestionRelated = stringProcess.sendTrivia("suggestion_related");
    console.log('sendTrivia initiated');

    var promise = Promise.resolve(firebaseMethods.getAllContentFromOneNode(topReference));
    promise.then(function (description) {
        if (description != null) {
            var message = stringProcess.getRandomFromArray(description);
            console.log('trivia: ' + message);
            res.send(textMessage.messageWithMarkdownSuggestion(message, suggestionRelated));
        } else {
            var nullResponse = stringProcess.firebaseNullResponse();
            res.send(textMessage.messageWithMarkdownSuggestion(nullResponse, suggestionRelated));
        }
    })
}