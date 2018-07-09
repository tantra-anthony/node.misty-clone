var textMessage = require('../templates/messageTemplate');

module.exports = function (req, res) {
    console.log("Booking fallback initiated");

    var headerArray = [
        "Hmm... Misty doesn't seem to recognise this venue!",
        "Misty doesn't recognise this venue at all! Misty apologises!",
        "I think this venue is unbookable!",
        "Misty doesn't know this venue very well... Maybe hooman can try asking for another venue!",
        "It seems that Misty doesn't recognise this venue!"
    ]

    var randomArray = [
        "Where is Seminar Room 5?",
        "Laundry location",
        "Where is the pantry?",
        "Where is the laundry?",
        "Where is the vending machine?",
        "Supper suggestions",
        "Help me suggest some supper options",
        "Suggest some supper options",
        "Who is the CSC president?",
        "Who is Anthony Tantra?",
        "Who is our rector?",
        "Who is the Ora House Captain?",
        "Who is our supreme leader?",
        "Who is the master of our college?",
        "Who is the CSC vice president?",
        "can I have tomorrow's breakfast menu?",
        "dinner menu today",
        "menu for breakfast on 5 May 2018",
        "breakfast menu next week",
        "Hwang's promotion",
        "Spice Table tCard promotion",
        "tCard promotions",
        "tCard promotion @ Butter My Buns"
    ]
    
    var howToBookArray = [
        "how do I book the seminar rooms?",
        "book abbey",
        "make booking for box office",
        "I want to book the lobby"
    ]
    
    var header = headerArray[Math.floor(Math.random() * headerArray.length)];
    var random = randomArray[Math.floor(Math.random() * randomArray.length)];
    var howToBook = howToBookArray[Math.floor(Math.random() * howToBookArray.length)];

    res.send(textMessage.fallbackMessageWithSuggestion(header, howToBook, random));
}