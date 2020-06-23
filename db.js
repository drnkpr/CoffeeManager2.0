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

// Coffee.create({
//     name: "ceapa",
//     cantitateVerde: 22,
//     cantitatePrajita: 0, 
//     procent: 60,
//     note: "asa era sa mai fie inca o data sau de 2 ori"
//  }, function(err, coffee){
//      if(err){
//          console.log(err);
//      } else {
//          console.log(coffee);
//      }
//  });


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


var prajitaSchema = new mongoose.Schema({
    sortiment: String,
    cantitate: Number,
    client: String, 
    failed: Boolean,
    prajitor: String, 
    date: String,
    note: String
});
var Prajita = mongoose.model('Prajita', prajitaSchema);





Prajita.create({
    sortiment: 'dada',
    cantitate: 123,
    client: 'pt acasa',
    failed: 0,
    prajitor: "angajat",
    date: "22.22.22",
    note: "a fost o data ca in povesti, a fost ca nikiodata"
});



Prajita.create({
    sortiment: 'dada',
    cantitate: 123,
    client: 'pt acasa',
    failed: 0,
    prajitor: "angajat",
    date: "22.22.22",
    note: "a fost o data ca in povesti, a fost ca nikiodata"
});





Prajita.create({
    sortiment: 'dada',
    cantitate: 123,
    client: 'pt acasa',
    failed: 0,
    prajitor: "angajat",
    date: "22.22.22",
    note: "a fost o data ca in povesti, a fost ca nikiodata"
});





Prajita.create({
    sortiment: 'dada',
    cantitate: 123,
    client: 'pt acasa',
    failed: 0,
    prajitor: "angajat",
    date: "22.22.22",
    note: "a fost o data ca in povesti, a fost ca nikiodata"
});







Prajita.create({
    sortiment: 'dada',
    cantitate: 123,
    client: 'pt acasa',
    failed: 0,
    prajitor: "angajat",
    date: "22.22.22",
    note: "a fost o data ca in povesti, a fost ca nikiodata"
});

