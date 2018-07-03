var messageTemplate = require('../templates/messageTemplate');

module.exports = function () {
    console.log("inputWelcome initiated");
    var message = messageTemplate.inputWelcome();
    return message;
}