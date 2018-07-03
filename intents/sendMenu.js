//this code is still in beta, not refactored yet

var rp = require('request-promise');
var cheerio = require('cheerio');
var textMessage = require('../templates/messageTemplate');
var moment = require('moment-timezone');

var HEADER_BREAKFAST = "☀️☀️*Breakfast*☀️☀️\n_available from 07:00 to 10:30_\n";
var HEADER_DINNER = "🌑🌑*Dinner*🌑🌑\n_available from 17:30 to 21:30_\n"
var TITLE_HELPYOURSELF = "🥣 *Help Yourself* ☕️\n";
var TITLE_WESTERN = "🍔 *Western* 🍟\n";
var TITLE_ASIAN = "🍣 *Asian* 🍱\n";
var TITLE_VEGETARIAN = "🥦 *Vegetarian* 🥕\n";
var TITLE_NOODLE = "🍜 *Noodle* 🍝\m"
var TITLE_SOTD = "⭐️ *Special of the Day* ⭐️\n";
var TITLE_HALAL = "🥩 *Malay (Halal)* 🍗\n";
var TITLE_GRAB = "🥪 *Grab & Go* 🥤\n";
var TITLE_INDIAN = "🍛 *Indian* 🍚\n";
var ENRICHMENT_MESSAGE = "🍌_Fruits and_ 🍦_other enrichment items will be served at the counter!_"
var LUNCH_FALLBACK = [
    "Hmm... Lunch is not served in Tembusu, hooman...😭😭.",
    "I'm afraid there is no lunch provided in Tembusu, hooman!😥",
    "Misty is sure that lunch is not provided in Tembusu, hooman!😭",
    "Tembusu doesn't provide lunch for its residents... hooman needs to find an alternative!😀",
    "Misty is sorry, hooman!😭😭 Lunch is not provided here!"
]


module.exports = function (menuTime, unformattedDate, req, res) {

    var date = moment(unformattedDate).tz('Asia/Singapore').format('YYYY-MM-DD');
    var displayDate = moment(unformattedDate).tz('Asia/Singapore').format('dddd, DD MMM YYYY');

    var menuText = "";

    console.log('date: ' + date);

    var baseUrl = "http://hg.sg/nus_ohs_admin/adminOHS/backend/script/index.php?" +
        "controller=pjFront&action=pjActionLoadEventDetail&index=4455&cate=0&dt=" + date;

    console.log("fetching from: " + baseUrl);

    var options = {
        url: baseUrl,
        transform: function (body) {
            return cheerio.load(body, {
                normalizeWhitespace: true
            });
        }
    }

    rp(options)
        .then(function (base) {

            var menuArray = [];

            if (menuTime == 'breakfast') {

                var breakfastHeader = HEADER_BREAKFAST + "*" + displayDate + "*";
                menuArray.push(breakfastHeader);

            } else if (menuTime == "dinner") {

                var dinnerHeader = HEADER_DINNER + "*" + displayDate + "*";
                menuArray.push(dinnerHeader);

            } else if (menuTime == "lunch") {

                var fallbackLunch = LUNCH_FALLBACK[Math.floor(Math.random() * LUNCH_FALLBACK.length)];
                menuArray.push(fallbackLunch);

            }

            console.log(menuArray);

            base('.pull-left').each(function () {

                if (base(this)
                    .text()
                    .includes(menuTime.toUpperCase())) {

                    const $ = cheerio.load(base(this)
                        .parent()
                        .parent()
                        .html());

                    $('td.imgtd').each(function (i, elem) {

                        if ($(this).html().includes('helpyourself')) {

                            var dummy = TITLE_HELPYOURSELF +
                                $(this)
                                    .next()
                                    .text()
                                    .trim()
                                    .replace(/\n+/g, '\n');

                            menuArray.push(dummy);

                        } else if ($(this).html().includes('western')) {

                            var dummy = TITLE_WESTERN +
                                $(this)
                                    .next()
                                    .text()
                                    .trim()
                                    .replace(/\n+/g, '\n');

                            menuArray.push(dummy);

                        } else if ($(this).html().includes('asian')) {

                            var dummy = TITLE_ASIAN +
                                $(this)
                                    .next()
                                    .text()
                                    .trim()
                                    .replace(/\n+/g, '\n');

                            menuArray.push(dummy);

                        } else if ($(this).html().includes('veg')) {

                            var dummy = TITLE_VEGETARIAN +
                                $(this)
                                    .next()
                                    .text()
                                    .trim()
                                    .replace(/\n+/g, '\n');

                            menuArray.push(dummy);

                        } else if ($(this).html().includes('noodle')) {

                            var dummy = TITLE_NOODLE +
                                $(this)
                                    .next()
                                    .text()
                                    .trim()
                                    .replace(/\n+/g, '\n');

                            menuArray.push(dummy);

                        } else if ($(this).html().includes('specials')) {

                            var dummy = TITLE_SOTD +
                                $(this)
                                    .next()
                                    .text()
                                    .trim()
                                    .replace(/\n+/g, '\n');

                            menuArray.push(dummy);

                        } else if ($(this).html().includes('muslim')) {

                            var dummy = TITLE_HALAL +
                                $(this)
                                    .next()
                                    .text()
                                    .trim()
                                    .replace(/\n+/g, '\n');

                            menuArray.push(dummy);

                        } else if ($(this).html().includes('grab')) {

                            var dummy = TITLE_GRAB +
                                $(this)
                                    .next()
                                    .text()
                                    .trim()
                                    .replace(/\n+/g, '\n');

                            menuArray.push(dummy);

                        } else if ($(this).html().includes('indian')) {

                            var dummy = TITLE_INDIAN +
                                $(this)
                                    .next()
                                    .text()
                                    .trim()
                                    .replace(/\n+/g, '\n');

                            menuArray.push(dummy);

                        }

                    });

                    menuArray.push(ENRICHMENT_MESSAGE);

                    menuText = menuArray.join('\n\n');

                    res.send(textMessage.messageWithMarkdown(menuText));

                };

            });

        })
        .catch(function (err) {
            console.log("error: " + err);
        })
}