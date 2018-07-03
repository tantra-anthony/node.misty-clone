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

    }
}
