var textMessage = require('../templates/messageTemplate');
var moment = require('moment-timezone');
var stringProcess = require('../strings/stringPreprocessing');

var suggestionArray = [];

var mcDonalds = stringProcess.suggestSupperOptions("mc_d");
var pizzaHut = stringProcess.suggestSupperOptions("pizza_hut");
var canadianPizza = stringProcess.suggestSupperOptions("canadian_pizza");
var kfc = stringProcess.suggestSupperOptions("kfc");
var alAmaan = stringProcess.suggestSupperOptions("al_amaan");
var ameenMakanHouse = stringProcess.suggestSupperOptions("ameen_makan_house");
var dominoPizza = stringProcess.suggestSupperOptions("domino_pizza");
var fongSeng = stringProcess.suggestSupperOptions("fong_seng");

module.exports = function () {

    console.log('suggestSupper initiated');

    var currentTime = moment().tz('Asia/Singapore').format("H");
    console.log(currentTime);
    suggestionArray = [];

    switch (currentTime) {
        case "0":
        case "1":
        case "2":
            suggestionArray.push(mcDonalds);
            suggestionArray.push(alAmaan);
            suggestionArray.push(ameenMakanHouse);

            return handleArray(suggestionArray);

        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
            suggestionArray.push(mcDonalds);
            return handleArray(suggestionArray);

        case "8":
        case "9":
        case "10":
            suggestionArray.push(mcDonalds);
            suggestionArray.push(fongSeng);

            return handleArray(suggestionArray);

        case "22":
            suggestionArray.push(mcDonalds);
            suggestionArray.push(alAmaan);
            suggestionArray.push(ameenMakanHouse);
            suggestionArray.push(pizzaHut);
            suggestionArray.push(fongSeng);

            return handleArray(suggestionArray)

        case "23":
            suggestionArray.push(mcDonalds);
            suggestionArray.push(alAmaan);
            suggestionArray.push(ameenMakanHouse);
            suggestionArray.push(fongSeng);

            return handleArray(suggestionArray);

        default:
            return pushAll();
    }
}


var pushAll = function () {

    suggestionArray.push(mcDonalds);
    suggestionArray.push(kfc);
    suggestionArray.push(dominoPizza);
    suggestionArray.push(fongSeng);
    suggestionArray.push(alAmaan);
    suggestionArray.push(ameenMakanHouse);
    suggestionArray.push(canadianPizza);
    suggestionArray.push(pizzaHut);

    return handleArray(suggestionArray);

}

var handleArray = function (array) {
    var header = stringProcess.suggestSupper("header");
    var message = header + array.join("\n");

    var suggestionRelated = stringProcess.suggestSupper("suggestion_related");

    console.log(message);

    return textMessage.messageWithMarkdownSuggestion(message, suggestionRelated);

    suggestionArray = [];
}
