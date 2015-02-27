var count = 0,
    destinations = []

var Flight = function () {
    this.data = {
        number: null,
        origin: null,
        destination: null,
        departs: null,
        arrives: null,
        actualDepart: null,
        actualArrive: null
    };

    this.fill = function (info) {
        for(var prop in this.data) {
            if(this.data[prop] !== 'undefined') {
                this.data[prop] = info[prop];
            }
        }
    };

    this.triggerDepart = function () {
        var today = new Date();
        this.data.actualDepart = today.getDate();
    };

    this.triggerArrive = function () {
        this.data.actualArrive = Date.now();
    }

    this.getInformation = function () {
        return this.data
    }

};

exports.create = function(info){
    var instance = new Flight();
    instance.fill(info);

    count++;
    if(destinations.indexOf(info['destinations']) < 0){
        destinations.push(info['destinations']);
    }

    return instance;

};

exports.getCount = function(){
    return count;
};

exports.getDestinations = function(){
    return destinations;
};




//exports.setNumber = function (num) {
//    number = num;
//};
//
//exports.setOrigin = function (o) {
//    origin = o;
//};
//
//exports.setDestination = function (d) {
//    destination = d;
//};
//
//exports.getInfo = function () {
//    return {
//        number: number,
//        origin: origin,
//        destination: destination
//    };
//};