var stringProcess = require('../strings/stringPreprocessing');

module.exports = function () {
    console.log("inputHelp initiated");

    var header = stringProcess.headerTopic("input_help");
    var searchLocation = stringProcess.inputHelp("search_location");
    var suggestSupper = stringProcess.inputHelp("suggest_supper");
    var howToBook = stringProcess.inputHelp("how_to_book");
    var sendMenu = stringProcess.inputHelp("send_menu");
    var promotion = stringProcess.inputHelp("promotion");

    var message = {
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

    return message;
}