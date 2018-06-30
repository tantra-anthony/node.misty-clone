exports.headerTopic = function (topic) {
    var header = "";

    var inputHelpArray = [
        "Here are some sample questions that hooman can ask!",
        "Here are some samples that hooman can try asking Misty!",
        "Hooman can try pressing one of Misty's sample questions below!",
        "Hooman can ask some questions such as the samples here!"
    ]

    var welcomeArray = [
        "Hi hooman! Welcome to Misty's humble abode! Ask Misty *anything* related to Tembusu!",
        "Hiya hooman! Misty is here to assist! Ask Misty *anything*!",
        "Hello hooman! Welcome! Ask Misty *anything* related to Tembusu College!",
        "Greetings, hooman! Misty is here to help hooman with *Tembusu related matters*!",
        "Hihi hooman! Misty is ready to help hooman with *all things Tembusu*!"
    ]

    var inputUnknownArray = [
        "Misty didn't get that hooman. Maybe hooman can try some of these suggestions.",
        "Misty missed what hooman said. Or hooman can try one of the suggestions below.",
        "Sorry hooman, could you say that again? Or alternatively, hooman can try one of Misty's suggestions below!",
        "Sorry hooman, can you say that again, or try some of these suggestions?",
        "Can you say that again, hooman? Hooman can try choosing one of the suggestions below!",
        "Sorry hooman, Misty didn't get that. Maybe hooman can choose one of the suggestions below!",
        "Say that again hooman?\n\nSome of Misty's suggested questions:",
        "Misty didn't get that. Can hooman try asking again or choose one of the suggestions below?",
        "Misty missed that. Some of Misty's suggested questions can be chosen here!",
        "Misty cannot help hooman with that! Probably hooman can try some of these suggestions."
    ]

    switch (topic) {
        case "input_help":
            header = inputHelpArray[Math.floor(Math.random() * inputHelpArray.length)];
            break;

        case "welcome":
            header = welcomeArray[Math.floor(Math.random() * welcomeArray.length)];
            break;

        case "input_unknown":
            header = inputUnknownArray[Math.floor(Math.random() * inputUnknownArray.length)];
            break;

        default:
            header = ""
            break
    }

    return header;
}

exports.inputHelp = function (topic) {

    var searchLocationArray = [
        "Where is Seminar Room 5?",
        "Laundry location",
        "Where is the pantry?",
        "Where is the laundry?",
        "Where is the vending machine?"
    ];

    var suggestSupperArray = [
        "Supper suggestions",
        "Help me suggest some supper options",
        "Suggest some supper options"
    ];

    var howToBookArray = [
        "how do I book the seminar rooms?",
        "book abbey",
        "make booking for box office",
        "I want to book the lobby"
    ]

    var sendMenuArray = [
        "can I have tomorrow's breakfast menu?",
        "dinner menu today",
        "menu for breakfast on 5 May 2018",
        "breakfast menu next week"
    ]

    var promotionArray = [
        "Hwang's promotion",
        "Spice Table tCard promotion",
        "tCard promotions",
        "tCard promotion @ Butter My Buns"
    ]


    switch (topic) {

        case "search_location":
            return searchLocationArray[Math.floor(Math.random() * searchLocationArray.length)];
            break;

        case "suggest_supper":
            return suggestSupperArray[Math.floor(Math.random() * suggestSupperArray.length)];
            break;

        case "how_to_book":
            return howToBookArray[Math.floor(Math.random() * howToBookArray.length)];
            break;

        case "send_menu":
            return sendMenuArray[Math.floor(Math.random() * sendMenuArray.length)];
            break;

        case "promotion":
            return promotionArray[Math.floor(Math.random() * promotionArray.length)];
            break;

    }
}

exports.inputWelcome = function (topic) {
    var helpArray = [
        "I need help!",
        "What can I ask you?",
        "What do I ask you?",
        "HELP",
        "Help me understand what you do!"
    ];

    switch (topic) {
        case "help":
            return helpArray[Math.floor(Math.random() * helpArray.length)];
            break;
    }
}

exports.inputUnknown = function (topic) {
    var searchLocationArray = [
        "Where is Seminar Room 5?",
        "Laundry location",
        "Where is the pantry?",
        "Where is the laundry?",
        "Where is the vending machine?"
    ];

    var suggestSupperArray = [
        "Supper suggestions",
        "Help me suggest some supper options",
        "Suggest some supper options"
    ];

    var howToBookArray = [
        "how do I book the seminar rooms?",
        "book abbey",
        "make booking for box office",
        "I want to book the lobby"
    ]

    var sendMenuArray = [
        "can I have tomorrow's breakfast menu?",
        "dinner menu today",
        "menu for breakfast on 5 May 2018",
        "breakfast menu next week"
    ]

    var promotionArray = [
        "Hwang's promotion",
        "Spice Table tCard promotion",
        "tCard promotions",
        "tCard promotion @ Butter My Buns"
    ]

    switch (topic) {
        case "search_location":
            return searchLocationArray[Math.floor(Math.random() * searchLocationArray.length)];
            break;

        case "suggest_supper":
            return suggestSupperArray[Math.floor(Math.random() * suggestSupperArray.length)];
            break;

        case "how_to_book":
            return howToBookArray[Math.floor(Math.random() * howToBookArray.length)];
            break;

        case "send_menu":
            return sendMenuArray[Math.floor(Math.random() * sendMenuArray.length)];
            break;

        case "promotion":
            return promotionArray[Math.floor(Math.random() * promotionArray.length)];
            break;

    }
}

exports.randomJoke = function (topic) {

    var suggestionRelatedArray = [
        "Give me another joke please",
        "Send me one more joke please",
        "Tell me another joke"
    ];

    switch (topic) {
        case "suggestion_related":
            return suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];
            break;
    }
}

exports.templateSuggestionRelated = function (topic) {
    var suggestionOneArray = [
        "Tell me a joke",
        "Can you tell me some jokes?",
        "Dinner menu last Tuesday",
        "Breakfast menu next Monday",
        "Breakfast menu today",
        "Who is Zachary Fong?",
        "Who is Anthony Tantra?",
        "Who is Gregory Clancey?",
        "How do I book the Atlas?",
        "How do I book the Abbey?",
        "How do I make a booking for sem rooms?",
        "Send me a joke!",
        "Where is the printer?",
        "Where is the CSC room?"
    ];

    var suggestionTwoArray = [
        "Sapore Italiano promotion for tCard",
        "tCard promotion for Butter My Buns",
        "tCard promotions",
        "Supper suggestions",
        "Suggest some supper options",
        "Do you know Al Amaan's phone number?",
        "KFC phone number",
        "Ameen's phone number",
        "Tell me some Tembusu trivia",
        "Random Tembusu trivia",
        "Do you know any trivia about Tembusu?",
        "Who is our master?",
        "Who is the vice pres of the CSC?",
        "Who is the Shan House Captain?"
    ];

    switch (topic) {
        case "suggestion_one":
            return suggestionOneArray[Math.floor(Math.random() * suggestionOneArray.length)];
            break;

        case "suggestion_two":
            return suggestionTwoArray[Math.floor(Math.random() * suggestionTwoArray.length)];
            break;
    }
}

exports.searchBooking = function (topic, description) {

    var suggestionRelatedArray = [
        "Booking of Amphithetre",
        "How to book the Tembusu Lobby",
        "How to book Sem Room 6",
        "Make booking for MPH"
    ];

    var responseArray = [
        "Misty suggests that hooman contact " + description + "! This lovely hooman will help you!",
        "Please contact " + description + "! This hooman will definitely know what to do!",
        "Hooman should contact " + description + "! This hooman is awesome and will help you out!",
        description + " will help you! Do contact him through this platform!",
        description + " is the hooman for you! Just contact this hooman!",
        "Misty is sure that " + description + " can help you with your request!",
        "Misty is 99% sure that " + description + " will help you if you ask!"
    ];

    switch (topic) {
        case "suggestion_related":
            return suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];
            break;

        case "search_booking_response":
            return responseArray[Math.floor(Math.random() * responseArray.length)];
            break;

    }

}

exports.searchByName = function (topic) {

    var suggestionRelatedArray = [
        "Who is Anthony Tantra",
        "Who is Tommy Koh",
        "Who is Yee Han?"
    ];

    switch (topic) {
        case "suggestion_related":
            return suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];
            break;

    }

}

exports.searchLocation = function (topic) {

    var suggestionRelatedArray = [
        "Where is Sem Room 5",
        "Where is the printer",
        "Do you know where the pantry is",
        "Where is the laundry",
        "Laundry location"
    ];

    switch (topic) {
        case "suggestion_related":
            return suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];
            break;

    }

}

exports.sendPromotion = function (topic) {

    var suggestionRelatedArray = [
        "tCard promotion for Hwang's",
        "promotion for Butter My Buns",
        "tCard promotion for Sapore Italiano",
        "Spice Table tCard promotion",
        "WaaCow promotion for tCard",
        "Humble Origins promotion"
    ];

    switch (topic) {
        case "suggestion_related":
            return suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];
            break;

    }

}

exports.searchByPosition = function (topic, description) {

    var suggestionRelatedArray = [
        "Who is the Ponya House Captain?",
        "Who is Ora Residential Fellow?",
        "Who is the CSC Sports Director"
    ];

    var responseArray = [
        "Misty is pretty sure it's " + description + "!",
        "Misty thinks this person is " + description + "!",
        "Hmm... Misty is quite sure that it's " + description + "!",
        description + " is probably the person that hooman is looking for!",
        description + "! Misty is quite sure!",
        "Misty guesses that it's " + description,
        "Misty is 99% sure that this person is " + description,
        "Misty can probably guess that this person is " + description
    ];

    switch (topic) {
        case "suggestion_related":
            return suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];
            break;

        case "search_by_position_response":
            return responseArray[Math.floor(Math.random() * responseArray.length)];
            break;

    }

}

exports.searchByPosition = function (topic, description) {

    var suggestionRelatedArray = [
        "Who is the Ponya House Captain?",
        "Who is Ora Residential Fellow?",
        "Who is the CSC Sports Director"
    ];

    var responseArray = [
        "Misty is pretty sure it's " + description + "!",
        "Misty thinks this person is " + description + "!",
        "Hmm... Misty is quite sure that it's " + description + "!",
        description + " is probably the person that hooman is looking for!",
        description + "! Misty is quite sure!",
        "Misty guesses that it's " + description,
        "Misty is 99% sure that this person is " + description,
        "Misty can probably guess that this person is " + description
    ];

    switch (topic) {
        case "suggestion_related":
            return suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];
            break;

        case "search_by_position_response":
            return responseArray[Math.floor(Math.random() * responseArray.length)];
            break;

    }

}

exports.searchPhoneNumber = function (topic, description) {

    var suggestionRelatedArray = [
        "Al Amaan's phone number",
        "McDonald's phone number",
        "KFC's number",
        "Do you have ameens number?",
        "McD number"
    ];

    var responseArray = [
        "Here you go, hooman! " + description,
        "Misty thinks it's " + description,
        "Here, hooman! " + description,
        description + " is probably the correct one!",
        description + " is the number for hooman!",
        "Misty is sure that it's " + description,
        "Misty is 99% sure that it's " + description
    ];

    switch (topic) {
        case "suggestion_related":
            return suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];
            break;

        case "search_phone_number_response":
            return responseArray[Math.floor(Math.random() * responseArray.length)];
            break;

    }
}

exports.suggestSupper = function (topic) {

    var headerArray = [
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

    switch (topic) {
        case "suggestion_related":
            return suggestionRelatedArray[Math.floor(Math.random() * suggestionRelatedArray.length)];
            break;

        case "header":
            return headerArray[Math.floor(Math.random() * headerArray.length)];
            break;
    }

}

exports.firebaseNullResponse = function () {

    var nullResponseArray = [
        "It seems that Misty is having a hard time processing this request! Hooman can visit [this link](https://tinyurl.com/mistyform) to submit a report!",
        "Misty cannot seem to process this request, hooman! Please fill in [this form](https://tinyurl.com/mistyform) to submit a report!",
        "Misty encountered an error! Please submit a report by filling up [this form](https://tinyurl.com/mistyform), hooman!"
    ]

    return nullResponseArray[Math.floor(Math.random() * nullResponseArray.length)];

}

exports.feedbackURL = function () {
    return "https://tinyurl.com/mistyform";
}

exports.tncURL = function () {
    return "https://tinyurl.com/mistytnc";
}