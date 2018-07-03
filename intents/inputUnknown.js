var messageTemplate = require('../templates/messageTemplate');

module.exports = function (queryText) {
    console.log("inputUnknown fallback initiated");
    var message = messageTemplate.inputUnknown(queryText);
    return message;
}