var firebaseMethods = require('../firebase/firebaseMethods');
var textMessage = require('../templates/messageTemplate')
var stringProcess = require('../strings/stringPreprocessing');
var firebaseHandlers = require('../firebase/firebaseHandlers');

module.exports = function (paramName, res) {
    
    var topReference = firebaseHandlers.firebaseReferences("send_promotion");
    var key = firebaseHandlers.firebaseReferences("generic_key");
    var param = paramName;

    var suggestionRelated = stringProcess.sendPromotion("suggestion_related");
    
    console.log(param);
    console.log('sendPromotion initiated');

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