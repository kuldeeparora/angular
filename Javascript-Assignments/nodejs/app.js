//var express = require('express');
//    cons = require('consolidate');
//    mongodb = require('mongodb');

var flight = require('./flight');

var pdxdax = {
    number : 872,
    origin : 'pdx',
    destination : 'dax'
};


var pl = flight.create(pdxdax);

pl.triggerArrive();
pl.triggerDepart();

console.log(pl.getInformation());

console.log(flight.getCount());
console.log(flight.getDestinations());