var firebaseMethods = require('../firebase/firebaseMethods');
var textMessage = require('../templates/messageTemplate')
var firebaseHandlers = require('../firebase/firebaseHandlers');
var stringProcess = require('../strings/stringPreprocessing');

module.exports = function (paramName, res) {
    
    var topReference = firebaseHandlers.firebaseReferences("search_booking_reference");
    var key = firebaseHandlers.firebaseReferences("generic_key");
    var param = paramName;

    var suggestionRelated = stringProcess.searchBooking("suggestion_related");

    console.log(param);
    console.log('searchBooking initiated');

    var promise = Promise.resolve(firebaseMethods.getChildAtOneNode(topReference, key, paramName));

    promise.then(function(description) {
        
        if (description != null) { 
            var bookingResponse = stringProcess.searchBooking("search_booking_response", description);
    
            console.log('bookingResponses: ' + bookingResponse);
            res.send(textMessage.messageWithMarkdownSuggestion(bookingResponse, suggestionRelated));

        } else {
            var nullResponse = stringProcess.firebaseNullResponse();
            res.send(textMessage.messageWithMarkdownSuggestion(nullResponse, suggestionRelated));
        }
    })
}