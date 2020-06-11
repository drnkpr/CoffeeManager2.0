var express = require("express");
var app = express(); 
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect('mongodb+srv://admin:admin@cityroast-mqgae.azure.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });


var coffeeSchema = new mongoose.Schema({
    name: String,
    cantitateVerde: Number,
    cantitatePrajita: Number,
    procent: Number,
    note: String
});

var Coffee = mongoose.model('Coffee', coffeeSchema);

Coffee.create({
    name: "ceapa",
    cantitateVerde: 22,
    cantitatePrajita: 0, 
    procent: 60,
    note: "asa era sa mai fie inca o data sau de 2 ori"
 }, function(err, coffee){
     if(err){
         console.log(err);
     } else {
         console.log(coffee);
     }
 });


var roastSchema = new mongoose.Schema({
    sortiment: String,
    cantitate: Number,
    dueDate: Date,
    done: Boolean,
    notes: String 
});

var Roast = mongoose.model('Roast', roastSchema);





var evacuareSchema = new mongoose.Schema({
    prajeli: Number,
    dataReset: Date
});

var Evacuare = mongoose.model('Evacuare', evacuareSchema);

