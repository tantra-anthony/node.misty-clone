module.exports = function (req, res) {
    console.log("inputUnknown fallback initiated");

    var headerArray = [
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

    var header = headerArray[Math.floor(Math.random() * headerArray.length)];
    var searchLocation = searchLocationArray[Math.floor(Math.random() * searchLocationArray.length)];
    var suggestSupper = suggestSupperArray[Math.floor(Math.random() * suggestSupperArray.length)];
    var howToBook = howToBookArray[Math.floor(Math.random() * howToBookArray.length)];
    var sendMenu = sendMenuArray[Math.floor(Math.random() * sendMenuArray.length)];
    var promotion = promotionArray[Math.floor(Math.random() * promotionArray.length)];

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