"use strict";

var calc = function (start) {
    var that = this;
    this.add = function (x) {
        start = start + x;
        return that;
    };

    this.multiply = function (x) {
        start = start * x;
        return that;
    };

    this.equals = function (callback) {
        callback(start);
        return that;
    };

};

new calc(0)
    .add(2)
    .multiply(3)
    .equals(function (results) {
        console.log(results);
    });


var Book = function (name, price) {
    var priceChanging = [],
        priceChanged = [];

    this.name = function (val) {
        return name;
    };
    this.price = function (val) {
        if(val !== undefined && val !== price){
            for(var i = 0; i < priceChanging.length; i++){
                if(!priceChanging[i](this, val)){
                    console.log(!priceChanging[i](this, val));
                    console.log(!priceChanging[i](this));
                    console.log(!priceChanging[i](val));
                    console.log(price);
                    return price;
                }
            }
            for(var i = 0; i <priceChanged.length; i++){
                priceChanged[i](this);
            }
            price  = val;
        }
        return price;
    };
    this.onpriceChanging = function (callback) {
        var test = priceChanging.push(callback);
        console.log(test);
    };
    this.onpriceChanged = function (callback) {
        priceChanged.push(callback);
        console.log(priceChanged.push(callback));
    };
};

var book = new Book("KD", 20);

console.log("the price of book named ", book.name() , " is ", book.price());

book.onpriceChanging(function (b, price) {
    if(price > 100){
        console.log("System error, Price is high");
        return false;
    }
    return true;
});

book.onpriceChanged(function (b) {
    console.log("price of the book has been changed" + b.price());
});

book.price(19.99);

book.price(200);

