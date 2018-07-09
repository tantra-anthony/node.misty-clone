var randomJoke = require('../intents/randomJoke');
var searchByName = require('../intents/searchByName');
var searchByPosition = require('../intents/searchByPosition');
var searchLocation = require('../intents/searchLocation');
var searchBooking = require('../intents/searchBooking');
var searchPhoneNumber = require('../intents/searchPhoneNumber');
var suggestSupper = require('../intents/suggestSupper');
var sendMenu = require('../intents/sendMenu');
var inputHelp = require('../intents/inputHelp');
var inputWelcome = require('../intents/inputWelcome');
var inputUnknown = require('../intents/inputUnknown');
var sendPromotion = require('../intents/sendPromotion');
var fallbackBooking = require('../intents/fallbackBooking');
var sendTrivia = require('../intents/sendTrivia');
var whatGeneral = require("../intents/whatGeneral");
var sendForm = require('../intents/sendForm');

var RAND_JOKE = "random.joke";
var WHO_NAME = "who.name";
var WHO_POSITION = "who.position";
var WHERE_LOCATION = "where.location";
var PHONE_NUMBER = "what.phone";
var MAKE_BOOKING = "how.booking";
var SUGGEST_SUPPER = "suggest.supper";
var SEND_MENU = "send.menu";
var INPUT_WELCOME = "input.welcome";
var INPUT_HELP = "input.help";
var INPUT_UNKNOWN = "input.unknown";
var SEND_PROMOTION = "send.promotion";
var FALLBACK_HOW_BOOKING = "fallback.how-booking";
var SEND_TRIVIA = "send.trivia";
var WHAT_GENERAL = "what.general";
var SEND_FORM = "send-form";
var SEND_FORM_EMAIL = "send-form.email";

module.exports = function (req, res) {

    //check for action passed
    var action = req.body.queryResult &&
        req.body.queryResult.action ?
        req.body.queryResult.action : null;

    switch (action) {

        //handle different action names
        case INPUT_WELCOME:
            res.send(inputWelcome());
            break;

        case INPUT_HELP:
            res.send(inputHelp());
            break;

        case INPUT_UNKNOWN:
            var queryText = req.body.queryResult &&
                req.body.queryResult.queryText ?
                req.body.queryResult.queryText : null;

            res.send(inputUnknown(queryText));
            break;

        case RAND_JOKE:
            randomJoke(res);
            break;

        case SEND_TRIVIA:
            sendTrivia(res);
            break;

        case WHAT_GENERAL:
            var paramName = req.body.queryResult &&
                req.body.queryResult.parameters.general ?
                req.body.queryResult.parameters.general : null;

            whatGeneral(paramName, res);
            break;

        case WHO_NAME:
            var paramName = req.body.queryResult &&
                req.body.queryResult.parameters.name ?
                req.body.queryResult.parameters.name : null;

            console.log("Action Name: " + action);
            console.log("Param Name: " + paramName);

            searchByName(paramName, res);

            break;

        case WHERE_LOCATION:
            var paramName = req.body.queryResult &&
                req.body.queryResult.parameters.location ?
                req.body.queryResult.parameters.location : null;

            console.log("Action Name: " + action);
            console.log("Param Name: " + paramName);

            searchLocation(paramName, res);

            break;

        case WHO_POSITION:
            var paramName = req.body.queryResult &&
                req.body.queryResult.parameters.position ?
                req.body.queryResult.parameters.position : null;

            console.log("Action Name: " + action);
            console.log("Param Name: " + paramName);

            searchByPosition(paramName, res);

            break;

        case PHONE_NUMBER:
            var paramName = req.body.queryResult &&
                req.body.queryResult.parameters.locPhoneNumber ?
                req.body.queryResult.parameters.locPhoneNumber : null;

            console.log("Action Name: " + action);
            console.log("Param Name: " + paramName);

            searchPhoneNumber(paramName, res);
            break;

        case MAKE_BOOKING:
            var paramName = req.body.queryResult &&
                req.body.queryResult.parameters.bookableVenue ?
                req.body.queryResult.parameters.bookableVenue : null;

            console.log("Action Name: " + action);
            console.log("Param Name: " + paramName);

            searchBooking(paramName, res);

            break;

        case SUGGEST_SUPPER:
            res.send(suggestSupper());
            break;

        case SEND_MENU:
            var unformattedDate = req.body.queryResult &&
                req.body.queryResult.parameters.date ?
                req.body.queryResult.parameters.date : null;

            var menuPeriod = req.body.queryResult &&
                req.body.queryResult.parameters.menuTime ?
                req.body.queryResult.parameters.menuTime : null;

            console.log("Action Name: " + action);
            console.log("unformattedDate: " + unformattedDate);
            console.log("menuPeriod: " + menuPeriod);

            sendMenu(menuPeriod, unformattedDate, req, res);

            break;

        case SEND_PROMOTION:
            var paramName = req.body.queryResult &&
                req.body.queryResult.parameters.tCardPromotions ?
                req.body.queryResult.parameters.tCardPromotions : null;

            console.log("Action Name: " + action);
            console.log("Param Name: " + paramName);

            sendPromotion(paramName, res);

            break;

        case FALLBACK_HOW_BOOKING:
            fallbackBooking(req, res);
            break;

        case SEND_FORM:
            var formType = req.body.queryResult &&
                req.body.queryResult.parameters.forms ?
                req.body.queryResult.parameters.forms : null;

            var sendMethod = req.body.queryResult &&
                req.body.queryResult.parameters.sendMethod ?
                req.body.queryResult.parameters.sendMethod : null;

            var email = req.body.queryResult &&
                req.body.queryResult.parameters.email ?
                req.body.queryResult.parameters.email : null;

            console.log("Action name: " + action);
            console.log("formType: " + formType);
            console.log("sendMethod: " + sendMethod);
            console.log("Email: " + email);

            if (email == null) {  
                if (sendMethod == null || sendMethod == "link") {
                    sendForm.sendByLink(formType, res);
                } else {
                    sendForm.fallbackEmail(res);
                }
            } else {
                sendForm.sendByEmail(formType, email, res);
            }
            
            break;

        case SEND_FORM_EMAIL:
            var email = req.body.queryResult &&
                req.body.queryResult.parameters.email ?
                req.body.queryResult.parameters.email : null;

            var formType = req.body.queryResult.outputContexts &&
                req.body.queryResult.outputContexts[0].parameters.forms ?
                req.body.queryResult.outputContexts[0].parameters.forms : null;

            console.log("Action name: " + action);
            console.log("formType: " + formType);
            console.log("Email: " + email);
            
            if (email != null) {
                sendForm.sendByEmail(formType, email, res);
            }

            break;

    }
}
