var firebaseMethods = require('../firebase/firebaseMethods');
var textMessage = require('../templates/messageTemplate')
var firebaseHandlers = require('../firebase/firebaseHandlers');
var stringProcess = require('../strings/stringPreprocessing');

module.exports = function (paramName, res) {
    
    var topReference = firebaseHandlers.firebaseReferences('search_by_name_reference');
    var key = firebaseHandlers.firebaseReferences("generic_key");
    var param = paramName;
    
    var suggestionRelated = stringProcess.searchByName("suggestion_related");

    console.log(param);
    console.log('searchByName initiated');

    var promise = Promise.resolve(firebaseMethods.getChildAtOneNode(topReference, key, paramName));

    promise.then(function(description) {

        if (description != null) {
            console.log('description: ' + description);
            res.send(textMessage.messageWithMarkdownSuggestion(description, suggestionRelated));
            
        } else {
            var nullResponse = stringProcess.firebaseNullResponse();
            res.send(textMessage.messageWithMarkdownSuggestion(nullResponse, suggestionRelated));
        }
    })
}