exports.simpleMessage = function(msg) {
    var message = {
        fulfillmentText: msg
    }

    return message;
}

exports.imageWithUri = function(uri) {
    var message = {
        fulfillmentMessages: [
            {
                image: {
                    imageUri: uri
                }
            }
        ]
    }
    
    return message;
}

exports.messageWithMarkdown = function(msg) {
    var message = {
        payload: {
            telegram: {
                text: msg,
                parse_mode: "Markdown"
            }
        }
    }

    return message;
}

exports.messageWithMarkdownSuggestion = function (msg, suggestionRelated) {

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

    var suggestionOne = suggestionOneArray[Math.floor(Math.random() * suggestionOneArray.length)];
    var suggestionTwo = suggestionTwoArray[Math.floor(Math.random() * suggestionTwoArray.length)];

    var message = {
        payload: {
            telegram: {
                text: msg,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: suggestionRelated,
                                callback_data: suggestionRelated
                            }
                        ],
                        [
                            {
                                text: suggestionOne,
                                callback_data: suggestionOne
                            }
                        ],
                        [
                            {
                                text: suggestionTwo,
                                callback_data: suggestionTwo
                            }
                        ]
                    ]
                }
            }
        }
    }

    return message;
    
}

exports.fallbackMessageWithSuggestion = function (header, first, second) {

    var message = {
        payload: {
            telegram: {
                text: header,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: first,
                                callback_data: first
                            }
                        ],
                        [
                            {
                                text: second,
                                callback_data: second
                            }
                        ],
                        [
                            {
                                text: "Send Feedback",
                                url: "https://tinyurl.com/mistyform"
                            }
                        ]
                    ]
                }
            }
        }
    }

    return message;    

}
    