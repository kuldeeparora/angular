var twit = require('twitter');
var util = require('util');

var twitter = new twit({
    customer_key: "4WYuo28IIiNG92T9LVbDbsc7j",
    customer_secret: "jY0sNWE7tcEqDSgQTsweDpciUO8xOBmsXPvNsOEANcYWCaiEXJ",
    access_token_key: "253815686-d41K2jRLfli7opSl8VMEjao7Hk6GLIImjYAm1MY7",
    access_token_secret: "vwNVYofd5rR29eYQzlqdGRrlVpFFxzOCvIexeWP7Kaa0G"
});

var count = 0;

twitter.stream(
    'statuses/filter',
    { track: ['awesome', 'cool', 'rad', 'gnarly', 'groovy'] },
    function(stream) {
        stream.on('data', function(tweet) {
            console.log(tweet.text);
        });
    }
);