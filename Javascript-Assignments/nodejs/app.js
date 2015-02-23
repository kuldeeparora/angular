//var express = require('express');
//    cons = require('consolidate');
//    mongodb = require('mongodb');

var flight = require('./flight');

var pdxdax = {
    number : 878,
    origin : 'pdx',
    destination : 'dax'
};


var pl = flight(pdxdax);

pl.triggerArrive();
pl.triggerDepart();

console.log(pl.getInformation());

//flight.setOrigin('LAX');
//flight.setDestination('DCA');
//flight.setNumber(462);
//
//console.log(flight.getInfo());
//
//console.log('test');