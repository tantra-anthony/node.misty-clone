var stringProcess = require('../strings/stringPreprocessing');

module.exports = function () {
    console.log("inputWelcome initiated");

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