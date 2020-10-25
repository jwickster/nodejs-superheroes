//jshint esversion:6


var superheroes = require("superheroes");
var supervillains = require("supervillains");

var myName = superheroes.random();
var villanName = supervillains.random();

console.log(myName + " Vs. " + villanName);