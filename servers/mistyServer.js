var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var requestHandler = require('../handlers/requestHandler');

module.exports = function () {
    var PORT = process.env.PORT || 1616;
    // var PORT = 1616;

    //initiate server using express
    var app = express();

    //use body parser to parse content
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    //setup POST routing
    app.post('/misty', function (req, res) {
        console.log('POST Request detected');
        requestHandler(req, res);
    });

    app.post('/ping', function (req, res) {
        console.log('app pinged from /ping');
        res.send("I'm alive!");
    });

    //get request to handle pinging app
    /*app.get('/ping', function (req, res) {

        console.log('app pinged from /ping');

    })*/

    //listen to port
    app.listen(PORT, function (req, res) {
        console.log("Server created\nListening to PORT: " + PORT);
        //ping heroku app every 5 minutes
        setInterval(function () {
            //request.get('any ngrok server');
            //request.get('####');
            request.post('####');
        }, 300000);

    });
}

