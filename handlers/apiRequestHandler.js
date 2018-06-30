exports.randomJoke = function () {

    var options = {
        url: 'https://icanhazdadjoke.com/',
        headers: {
            'Accept': 'text/plain'
        }
    }

    return options;
}