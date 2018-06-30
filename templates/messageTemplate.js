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
    