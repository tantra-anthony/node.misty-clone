//this code is still under review

var rp = require('request-promise');
var cheerio = require('cheerio');
var textMessage = require('../templates/messageTemplate');
var moment = require('moment-timezone');
var stringProcess = require('../strings/stringPreprocessing');

var HEADER_BREAKFAST = "☀️☀️*Breakfast*☀️☀️\n_available from 07:00 to 10:30_\n";
var HEADER_DINNER = "🌑🌑*Dinner*🌑🌑\n_available from 17:30 to 21:30_\n"
var TITLE_HELPYOURSELF = "🥣 *Help Yourself* ☕️\n";
var TITLE_WESTERN = "🍔 *Western* 🍟\n";
var TITLE_ASIAN = "🍣 *Asian* 🍱\n";
var TITLE_VEGETARIAN = "🥦 *Vegetarian* 🥕\n";
var TITLE_NOODLE = "🍜 *Noodle* 🍝\n"
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

    var date;
    var displayDate;

    if (unformattedDate != null) {
        date = moment(unformattedDate).tz('Asia/Singapore').format('YYYY-MM-DD');
        displayDate = moment(unformattedDate).tz('Asia/Singapore').format('dddd, DD MMM YYYY');
        console.log('date: ' + date);
    } else {
        date = moment().tz('Asia/Singapore').format('YYYY-MM-DD');
        displayDate = moment().tz('Asia/Singapore').format('dddd, DD MMM YYYY');
        console.log('date: ' + date);
    }

    var menuText = "";

    var baseUrl = "####";

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
        .then(function(base) {
            
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

            // TO DO: clean up code!

            if (base('.pjPecEventContainer').text().includes(menuTime.toUpperCase())) {

                base('.pull-left').each(function() {
                    
                    if (base(this)
                        .text()
                        .includes(menuTime.toUpperCase())) {
    
                        const $ = cheerio.load(base(this)
                            .parent()
                            .parent()
                            .html());
    
                        $('td.imgtd').each(function() {
    
                            if ($(this).html().includes('helpyourself')) {
    
                                var dummy = filterData(TITLE_HELPYOURSELF, $(this));
                                console.log($(this).next().html().replace);
                                menuArray.push(dummy);
    
                            } else if ($(this).html().includes('western')) {
    
                                var dummy = filterData(TITLE_WESTERN, $(this));
                                menuArray.push(dummy);
    
                            } else if ($(this).html().includes('asian')) {
    
                                var dummy = filterData(TITLE_ASIAN, $(this));
                                menuArray.push(dummy);
    
                            } else if ($(this).html().includes('veg')) {
    
                                var dummy = filterData(TITLE_VEGETARIAN, $(this));
                                menuArray.push(dummy);
    
                            } else if ($(this).html().includes('noodle')) {
    
                                var dummy = filterData(TITLE_NOODLE, $(this));
                                menuArray.push(dummy);
    
                            } else if ($(this).html().includes('specials')) {
    
                                var dummy = filterData(TITLE_SOTD, $(this));
                                menuArray.push(dummy);
    
                            } else if ($(this).html().includes('muslim')) {
                                
                                var dummy = filterData(TITLE_HALAL, $(this));
                                menuArray.push(dummy);
    
                            } else if ($(this).html().includes('grab')) {
    
                                var dummy = filterData(TITLE_GRAB, $(this));
                                menuArray.push(dummy);
    
                            } else if ($(this).html().includes('indian')) {
    
                                var dummy = filterData(TITLE_INDIAN, $(this));
                                menuArray.push(dummy);
                            
                            }
    
                        });
                    
                        menuArray.push(ENRICHMENT_MESSAGE);
                        menuText = menuArray.join('\n\n');
                        res.send(textMessage.messageWithMarkdown(menuText));
                    
                    }
                });
            } else {
                var nullResponse = stringProcess.sendMenu(menuTime, "null_response");
                var suggestionRelated = stringProcess.sendMenu(menuTime, "suggestion_related");
                res.send(textMessage.messageWithMarkdownSuggestion(nullResponse, suggestionRelated));
            }
                
        })
        .catch(function(err) {
            console.log("error:123333 " + err);
        })
}

function filterData(title, cheerioObject) {
    return title + cheerioObject.next()
                            .html()
                            .replace(/[<]br[>]/g, '\n')
                            .replace(/[<][/]p[>]/g, '')
                            .replace(/[<]p[>]/g, '')
                            .replace(/&amp;/g, '&')
                            .replace(/&#xA0;/g, ' ')
                            .replace(/\n+/g, '\n');
}