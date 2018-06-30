var textMessage = require('../templates/messageTemplate');
var moment = require('moment-timezone');
var stringProcess = require('../strings/stringPreprocessing');

var suggestionArray = [];

var mcDonalds = "🍔 [McDonald's](https://www.mcdelivery.com.sg/)";
var pizzaHut = "🍕 [Pizza Hut](https://www.pizzahut.com.sg/)";
var canadianPizza = "🍕 [Canadian Pizza](https://www.canadian-pizza.com/)";
var kfc = "🍗 [Kentucky Fried Chicken](https://www.kfc.com.sg/)";
var alAmaan = "🍛 Al Amaan (+6567740637)";
var ameenMakanHouse = "🍛 Ameen Makan House (+6564651000)";
var dominoPizza = "🍕 [Domino's Pizza](https://www.dominos.com.sg/)";
var fongSeng = "🍚 Fong Seng Nasi Lemak (through [FoodPanda](https://www.foodpanda.sg/food/delivery/))";

module.exports = function () {

    console.log('suggestSupper initiated');

    var currentTime = moment().tz('Asia/Singapore').format("H");
    console.log(currentTime);

    switch (currentTime) {
        case "0":
        case "1":
        case "2":
            suggestionArray.push(mcDonalds);
            suggestionArray.push(alAmaan);
            suggestionArray.push(ameenMakanHouse);

            return handleArray(suggestionArray);

            break;
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
            suggestionArray.push(mcDonalds);
            
            return handleArray(suggestionArray);

            break;

        case "8":
        case "9":
        case "10":
            suggestionArray.push(mcDonalds);
            suggestionArray.push(fongSeng);

            return handleArray(suggestionArray);

            break;

        case "22":
            suggestionArray.push(mcDonalds);
            suggestionArray.push(alAmaan);
            suggestionArray.push(ameenMakanHouse);
            suggestionArray.push(pizzaHut);
            suggestionArray.push(fongSeng);

            return handleArray(suggestionArray)
            
            break;

        case "23":
            suggestionArray.push(mcDonalds);
            suggestionArray.push(alAmaan);
            suggestionArray.push(ameenMakanHouse);
            suggestionArray.push(fongSeng);

            return handleArray(suggestionArray);

            break;

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
