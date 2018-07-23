var firebaseMethods = require('../firebase/firebaseMethods');
var textMessage = require('../templates/messageTemplate')
var firebaseHandlers = require('../firebase/firebaseHandlers');
var stringProcess = require('../strings/stringPreprocessing');

module.exports = function (paramName, res) {
    
    var topReference = firebaseHandlers.firebaseReferences('who_in_committee');
    var key = firebaseHandlers.firebaseReferences("generic_key");
    var param = paramName;
    
    var suggestionRelated = stringProcess.whoInCommittee("suggestion_related");

    console.log(param);
    console.log('whoInCommittee initiated');

    firebaseMethods.getChildAtOneNode(topReference, key, paramName).then(function(result) {
        if (result != null) {
            console.log(result);
            res.send(textMessage.messageWithMarkdownSuggestion(result, suggestionRelated));
        } else {
            var nullResponse = stringProcess.firebaseNullResponse();
            res.send(textMessage.messageWithMarkdownSuggestion(nullResponse, suggestionRelated));            
        }
    })
}