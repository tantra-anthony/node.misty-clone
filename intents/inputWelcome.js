module.exports = function (req, res) {
    console.log("inputWelcome suggestions initiated");

    var headerArray = [
        "Hi hooman! Welcome to Misty's humble abode! Ask Misty *anything* related to Tembusu!",
        "Hiya hooman! Misty is here to assist! Ask Misty *anything*!",
        "Hello hooman! Welcome! Ask Misty *anything* related to Tembusu College!",
        "Greetings, hooman! Misty is here to help hooman with *Tembusu related matters*!",
        "Hihi hooman! Misty is ready to help hooman with *all things Tembusu*!"
    ]

    var helpArray = [
        "I need help!",
        "What can I ask you?",
        "What do I ask you?",
        "HELP",
        "Help me understand what you do!"
    ];

    var header = headerArray[Math.floor(Math.random() * headerArray.length)];
    var help = helpArray[Math.floor(Math.random() * helpArray.length)];

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
                                url: "https://tinyurl.com/mistytnc"
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

    res.send(message);
}