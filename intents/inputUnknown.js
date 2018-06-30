var stringProcess = require('../strings/stringPreprocessing');

module.exports = function () {
    console.log("inputUnknown fallback initiated");
    
    var header = stringProcess.headerTopic("input_unknown");
    var searchLocation = stringProcess.inputUnknown("search_location");
    var suggestSupper = stringProcess.inputUnknown("suggest_supper");
    var howToBook = stringProcess.inputUnknown("how_to_book");
    var sendMenu = stringProcess.inputUnknown("send_menu");
    var promotion = stringProcess.inputUnknown("promotion");
    var feedbackURL = stringProcess.feedbackURL();

    var message = {
        payload: {
            telegram: {
                text: header,
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