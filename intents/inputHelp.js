var messageTemplate = require('../templates/messageTemplate');

module.exports = function () {
    console.log("inputHelp initiated");
    var message = messageTemplate.inputHelp();
    return message;
}