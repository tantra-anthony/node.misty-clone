module.exports = function (req, res) {
    console.log("inputWelcome suggestions initiated");

    var headerArray = [
        "Here are some sample questions that hooman can ask!",
        "Here are some samples that hooman can try asking Misty!",
        "Hooman can try pressing one of Misty's sample questions below!",
        "Hooman can ask some questions such as the samples here!"
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

    var whoIsArray = [
        "Who is the CSC president?",
        "Who is Anthony Tantra?",
        "Who is our rector?",
        "Who is the Ora House Captain?",
        "Who is our supreme leader?",
        "Who is the master of our college?",
        "Who is the CSC vice president?"
    ]

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
    var whoIs = whoIsArray[Math.floor(Math.random() * whoIsArray.length)];
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
                                text: whoIs,
                                callback_data: whoIs
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

    res.send(message);
}