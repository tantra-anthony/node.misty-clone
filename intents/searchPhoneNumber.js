var firebaseMethods = require('../firebase/firebaseMethods');
var textMessage = require('../templates/messageTemplate');
var firebaseHandlers = require('../firebase/firebaseHandlers');
var stringProcess = require('../strings/stringPreprocessing');

module.exports = function (paramName, res) {
    
    var topReference = firebaseHandlers.firebaseReferences("search_phone_number_reference");
    var key = firebaseHandlers.firebaseReferences("generic_key");
    var param = paramName;

    var suggestionRelated = stringProcess.searchPhoneNumber("suggestion_related")
    console.log(param);
    console.log('searchPhoneNumber initiated');

    var promise = Promise.resolve(firebaseMethods.getChildAtOneNode(topReference, key, paramName));

    promise.then(function(description) {
        
        if (description != null) {
            var phoneNumberResponse = stringProcess.searchPhoneNumber("search_phone_number_response", description);
            console.log('phoneNumberResponses: ' + phoneNumberResponse);
            res.send(textMessage.messageWithMarkdownSuggestion(phoneNumberResponse, suggestionRelated));

        } else {
            var nullResponse = stringProcess.firebaseNullResponse();
            res.send(textMessage.messageWithMarkdownSuggestion(nullResponse, suggestionRelated));
        }
    })
}