var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var randomJoke = require('./intents/randomJoke');
var searchByName = require('./intents/searchByName');
var searchByPosition = require('./intents/searchByPosition');
var searchLocation = require('./intents/searchLocation');
var searchBooking = require('./intents/searchBooking');
var searchPhoneNumber = require('./intents/searchPhoneNumber');
var suggestSupper = require('./intents/suggestSupper');
var sendMenu = require('./intents/sendMenu');
var inputHelp = require('./intents/inputHelp');
var inputWelcome = require('./intents/inputWelcome');
var inputUnknown = require('./intents/inputUnknown');
var sendPromotion = require('./intents/sendPromotion');
var fallbackBooking = require('./intents/fallbackBooking');

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

var PORT = process.env.PORT || 1616;
// var PORT = 1616;

//all sensitive information are replaced with ####

//initiate server using express
//all below can be encapsulated in another object
//I was lazy to put all these inside a method so I just left it there
var app = express();

//use body parser to parse content
app.use(bodyParser.urlencoded({
    extended: true
}
));

app.use(bodyParser.json());

//setup POST routing
app.post('####', function (req, res) {

    console.log('POST Request detected');

    //check for action passed
    var action = req.body.queryResult &&
        req.body.queryResult.action ?
        req.body.queryResult.action : null;

    switch (action) {

        //handle different action names from DialogFlow
        case INPUT_WELCOME:
            inputWelcome(req, res);
            break;

        case INPUT_HELP:
            inputHelp(req, res);
            break;

        case INPUT_UNKNOWN:
            inputUnknown(req, res);
            break;

        case RAND_JOKE:
            randomJoke(req, res);
            break;

        case WHO_NAME:
            var paramName = req.body.queryResult &&
                req.body.queryResult.parameters.name ?
                req.body.queryResult.parameters.name : null;

            console.log("Action Name: " + action);
            console.log("Param Name: " + paramName);

            searchByName(paramName, req, res);
            break;

        case WHERE_LOCATION:
            var paramName = req.body.queryResult &&
                req.body.queryResult.parameters.location ?
                req.body.queryResult.parameters.location : null;

            console.log("Action Name: " + action);
            console.log("Param Name: " + paramName);

            searchLocation(paramName, req, res);
            break;

        case WHO_POSITION:
            var paramName = req.body.queryResult &&
                req.body.queryResult.parameters.position ?
                req.body.queryResult.parameters.position : null;

            console.log("Action Name: " + action);
            console.log("Param Name: " + paramName);

            searchByPosition(paramName, req, res);
            break;

        case PHONE_NUMBER:
            var paramName = req.body.queryResult &&
                req.body.queryResult.parameters.locPhoneNumber ?
                req.body.queryResult.parameters.locPhoneNumber : null;

            console.log("Action Name: " + action);
            console.log("Param Name: " + paramName);

            searchPhoneNumber(paramName, req, res);
            break;

        case MAKE_BOOKING:
            var paramName = req.body.queryResult &&
                req.body.queryResult.parameters.bookableVenue ?
                req.body.queryResult.parameters.bookableVenue : null;

            console.log("Action Name: " + action);
            console.log("Param Name: " + paramName);

            searchBooking(paramName, req, res);
            break;

        case SUGGEST_SUPPER:
            suggestSupper(req, res);
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

            sendPromotion(paramName, req, res);

            break;

        case FALLBACK_HOW_BOOKING:
            fallbackBooking(req, res);
            break;

    }
});

//get request to handle pinging app
app.get('/ping', function (req, res) {

    console.log('app pinged from /ping');

})

//listen to port
app.listen(PORT, function (req, res) {
    console.log("Server created\nListening to PORT: " + PORT);

    //ping heroku app every 5 minutes
    setInterval(function () {

        request.get('https://tembusu-misty-bot.herokuapp.com/misty');

    }, 300000);

});
