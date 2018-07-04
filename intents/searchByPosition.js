var firebaseMethods = require('../firebase/firebaseMethods');
var textMessage = require('../templates/messageTemplate')
var firebaseHandlers = require('../firebase/firebaseHandlers');
var stringProcess = require('../strings/stringPreprocessing');

module.exports = function (paramName, res) {

    var topReference = firebaseHandlers.firebaseReferences('search_by_position_reference');
    var key = firebaseHandlers.firebaseReferences("generic_key");
    var param = paramName;

    var suggestionRelated = stringProcess.searchByPosition("suggestion_related");
    
    console.log(param);
    console.log('searchByPosition initiated');

    firebaseMethods.getChildAtOneNode(topReference, key, paramName).then(function(result) {
        if (result != null) {
            var positionResponse = stringProcess.searchByPosition("search_by_position_response", result);
            console.log(result);
            res.send(textMessage.messageWithMarkdownSuggestion(positionResponse, suggestionRelated));
        } else {
            var nullResponse = stringProcess.firebaseNullResponse();
            res.send(textMessage.messageWithMarkdownSuggestion(nullResponse, suggestionRelated));            
        }
    })
}