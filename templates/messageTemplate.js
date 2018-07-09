var stringProcess = require('../strings/stringPreprocessing');

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

    var suggestionOne = stringProcess.templateSuggestionRelated("suggestion_one");
    var suggestionTwo = stringProcess.templateSuggestionRelated("suggestion_two");

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

exports.messageWithOneLink = function (header, urlPlaceholder, urlLink) {

    var message = {
        payload: {
            telegram: {
                text: header,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: urlPlaceholder,
                                url: urlLink
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

    var feedbackURL = stringProcess.feedbackURL();

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
                                url: feedbackURL
                            }
                        ]
                    ]
                }
            }
        }
    }

    return message;    

}

exports.inputHelp = function() {
    
    var header = stringProcess.headerTopic("input_help");
    var searchLocation = stringProcess.inputHelp("search_location");
    var suggestSupper = stringProcess.inputHelp("suggest_supper");
    var howToBook = stringProcess.inputHelp("how_to_book");
    var sendMenu = stringProcess.inputHelp("send_menu");
    var promotion = stringProcess.inputHelp("promotion");

    var msg = {
        payload: {
            telegram: {
                text: header,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: searchLocation,
                                callback_data: searchLocation
                            }
                        ],
                        [
                            {
                                text: suggestSupper,
                                callback_data: suggestSupper
                            }
                        ],
                        [
                            {
                                text: howToBook,
                                callback_data: howToBook
                            }
                        ],
                        [
                            {
                                text: sendMenu,
                                callback_data: sendMenu
                            }
                        ],
                        [
                            {
                                text: promotion,
                                callback_data: promotion
                            }
                        ]
                    ]
                }
            }
        }
    }

    return msg;
}

exports.inputUnknown = function(queryText) {
    var header = stringProcess.headerTopic("input_unknown");
    var suggestSupper = stringProcess.inputUnknown("suggest_supper");
    var howToBook = stringProcess.inputUnknown("how_to_book");
    var sendMenu = stringProcess.inputUnknown("send_menu");
    var promotion = stringProcess.inputUnknown("promotion");
    var feedbackURL = stringProcess.feedbackURL();
    var gSearchURL = "https://www.google.com/search?q=" + queryText;

    var message = {
        payload: {
            telegram: {
                text: header,
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: promotion,
                                callback_data: promotion
                            }
                        ],
                        [
                            {
                                text: suggestSupper,
                                callback_data: suggestSupper
                            }
                        ],
                        [
                            {
                                text: howToBook,
                                callback_data: howToBook
                            }
                        ],
                        [
                            {
                                text: sendMenu,
                                callback_data: sendMenu
                            }
                        ],
                        [
                            {
                                text: "Google Search",
                                url: gSearchURL
                            }
                        ],
                        [
                            {
                                text: "Send Feedback",
                                url: feedbackURL
                            }
                        ]
                    ]
                }
            }
        }
    }

    return message;
}

exports.inputWelcome = function() {
    
    var header = stringProcess.headerTopic("welcome");
    var help = stringProcess.inputWelcome('help');
    var tncURL = stringProcess.tncURL();
    var feedbackURL = stringProcess.feedbackURL();
    
    var message = {
        payload: {
            telegram: {
                text: header,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: help,
                                callback_data: help
                            }
                        ],
                        [
                            {
                                text: "Terms & Conditions",
                                url: tncURL
                            }
                        ],
                        [
                            {
                                text: "Send Feedback",
                                url: feedbackURL
                            }
                        ]
                    ]
                }
            }
        }
    }

    return message;
}
    