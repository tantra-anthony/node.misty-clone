var textMessage = require('../templates/messageTemplate');
var moment = require('moment-timezone');

var def = ["🍔 [McDonald's](https://www.mcdelivery.com.sg/)"];

var pizzaHut = "🍕 [Pizza Hut](https://www.pizzahut.com.sg/)";
var canadianPizza = "🍕 [Canadian Pizza](https://www.canadian-pizza.com/)";
var kfc = "🍗 [Kentucky Fried Chicken](https://www.kfc.com.sg/)";
var alAmaan = "🍛 Al Amaan (+6567740637)";
var ameenMakanHouse = "🍛 Ameen Makan House (+6564651000)";
var dominoPizza = "🍕 [Domino's Pizza](https://www.dominos.com.sg/)";
var fongSeng = "🍚 Fong Seng Nasi Lemak (through [FoodPanda](https://www.foodpanda.sg/food/delivery/))";

var dummy = [
    "Here are some of Misty's suggestions:\n",
    "Some suggestions that Misty has:\n",
    "Misty suggests some of these places:\n",
    "Suggestions that hooman might like:\n"
]

var suggestionRelatedArray = [
    "McDonald's phone number",
    "Al Amaan's phone number",
    "Ameen Makan House's phone number"
];

var pushAll = function () {

    def.push(kfc);
    def.push(dominoPizza);
    def.push(fongSeng);
    def.push(alAmaan);
    def.push(ameenMakanHouse);
    def.push(canadianPizza);
    def.push(pizzaHut);

    var rand = dummy[Math.floor(Math.random() * dummy.length)];
    var message = rand + def.join("\n");

    console.log(message);

    return message;

}

module.exports = function (req, res) {

    console.log('suggestSupper initiated');

    var currentTime = moment().tz('Asia/Singapore').format("H");

    console.log(currentTime);

    var suggestionRelated = suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];

    //time can be more accurate but will need more cases to be caught

    switch (currentTime) {
        case "0":
        case "1":
        case "2":
            def.push(alAmaan);
            def.push(ameenMakanHouse);
        
            var rand = dummy[Math.floor(Math.random() * dummy.length)];
            var message = rand + def.join("\n");

            console.log(message);

            res.send(textMessage.messageWithMarkdownSuggestion(message, suggestionRelated));

            def = ["🍔 [McDonald's](https://www.mcdelivery.com.sg/)"];

            break;
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
            var rand = dummy[Math.floor(Math.random() * dummy.length)];
            var message = rand + def.join("\n");

            console.log(message);

            res.send(textMessage.messageWithMarkdownSuggestion(message, suggestionRelated));

            def = ["🍔 [McDonald's](https://www.mcdelivery.com.sg/)"];

            break;

        case "8":
        case "9":
        case "10":
            def.push(fongSeng);

            var rand = dummy[Math.floor(Math.random() * dummy.length)];
            var message = rand + def.join("\n");

            console.log(message);

            res.send(textMessage.messageWithMarkdownSuggestion(message, suggestionRelated));

            def = ["🍔 [McDonald's](https://www.mcdelivery.com.sg/)"];

            break;

        case "22":
            def.push(alAmaan);
            def.push(ameenMakanHouse);
            def.push(pizzaHut);
            def.push(fongSeng);

            var rand = dummy[Math.floor(Math.random() * dummy.length)];
            var message = rand + def.join("\n");

            console.log(message);

            res.send(textMessage.messageWithMarkdownSuggestion(message, suggestionRelated));

            def = ["🍔 [McDonald's](https://www.mcdelivery.com.sg/)"];

            break;

        case "23":
            def.push(alAmaan);
            def.push(ameenMakanHouse);
            def.push(fongSeng);

            var rand = dummy[Math.floor(Math.random() * dummy.length)];
            var message = rand + def.join("\n");

            console.log(message);

            res.send(textMessage.messageWithMarkdownSuggestion(message, suggestionRelated));

            def = ["🍔 [McDonald's](https://www.mcdelivery.com.sg/)"];

            break;

        default:
            var message = pushAll();
            res.send(textMessage.messageWithMarkdownSuggestion(message, suggestionRelated));
            def = ["🍔 [McDonald's](https://www.mcdelivery.com.sg/)"];

    }
}
