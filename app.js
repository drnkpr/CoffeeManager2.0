var express = require("express");
var app = express(); 
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect('mongodb+srv://admin:admin@cityroast-mqgae.azure.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var coffeeSchema = new mongoose.Schema({
    name: String,
    cantitateVerde: Number,
    cantitatePrajita: Number,
    note: String
});

var Coffee = mongoose.model('Coffee', coffeeSchema);


var queueSchema = new mongoose.Schema({
    sortiment: String, 
    cantitate: Number,
    note: String,
    importanta: Number
});

var Queue = mongoose.model('Queue', queueSchema);

app.get("/", function(req, res){
    res.render("home");
});

app.get("/helper", function(req, res){
    res.render("helper_prajire");
});

app.get("/prajeli", function(req, res){
    res.render("prajeli");
});

app.get("/sortimente", function(req, res){
    var arr = [];
    Coffee.find({}, function(err, coffee){
        if(err){
            console.log(err);
        } else {
            for(var i = 0; i < coffee.length; i++){
                arr.push(coffee[i]);
            } 
        }
        res.render("sortimente", {arrCoffee: arr});
    });});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

// app.get("/editcoffee", function(req, res){§
//     var arr = [];
//     Coffee.find({}, function(err, coffee){
//         if(err){
//             console.log(err);
//         } else {
//             for(var i = 0; i < coffee.length; i++){
//                 arr.push(coffee[i].name);
//             } 
//         }
//         res.render("editcoffee", {arr: arr});
//     });
// });

// app.get("/sortimente", function(req, res){
//     var arr = [];
//     Coffee.find({}, function(err, coffee){
//         if(err){
//             console.log(err);
//         } else {
//             for(var i = 0; i < coffee.length; i++){
//                 arr.push(coffee[i].name);
//             } 
//         }
//         res.render("sortimente", {arr: arr});
//     });
// });

// app.post("/addcoffee", function(req, res){
//     var cantitate = req.body.cantitate;
//     var sortiment = req.body.selectSortiment.toLowerCase();
//     var cantitateInitiala = 0;
//     var cantitateUpdated = 0;

//     Coffee.findOne({name: sortiment}, function(err, coffee){
//         if(err){
//             console.log(err);
//         } else {
//             cantitateInitiala = Number(coffee.cantitateVerde);
//         }
//         cantitateUpdated = Number(cantitate) + cantitateInitiala;

//         Coffee.updateOne({name:sortiment}, {cantitateVerde: cantitateUpdated}, function(err, result){
//             if(err){
//                 console.log(err);
//             } else {
//                 res.redirect("/");
//             }
//         });
//     });
// });

// app.post("/removecoffee", function(req, res){
//     var cantitate = req.body.cantitate;
//     var sortiment = req.body.selectSortiment.toLowerCase();
//     var cantitateInitiala = 0;
//     var cantitateUpdated = 0;

//     Coffee.findOne({name: sortiment}, function(err, coffee){
//         if(err){
//             console.log(err);
//         } else {
//             cantitateInitiala = Number(coffee.cantitateVerde);
//         }
//         cantitateUpdated = cantitateInitiala - Number(cantitate);

//         Coffee.updateOne({name:sortiment}, {cantitateVerde: cantitateUpdated}, function(err, result){
//             if(err){
//                 console.log(err);
//             } else {
//                 res.redirect("/");
//             }
//         });
//     }); 
// });

// app.post("/roastcoffee", function(req, res){
//     var cantitate = req.body.cantitate;
//     var sortiment = req.body.selectSortiment.toLowerCase();
//     var cantitateIVerde = 2;
//     var cantitateIPrajita = 2;
//     var newPrajitaDB = 0;
//     var newVerdeDB = 0;

//     Coffee.findOne({name: sortiment}, function(err, coffee) {
//         if(err){
//             console.log(err);
//         } else {
//             //retrieve cantitate verde si prajita din db
//             cantitateIVerde = Number(coffee.cantitateVerde);
//             cantitateIPrajita = Number(coffee.cantitatePrajita); 
//             //do the maths - scade din verdedb si pune in prajitadb
//             newVerdeDB = cantitateIVerde - Number(cantitate);
//             newPrajitaDB = Number(cantitateIPrajita)+Number(cantitate);
//             Coffee.updateOne({name: sortiment}, {cantitatePrajita: newPrajitaDB, cantitateVerde:newVerdeDB}, function(err, result){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     res.redirect("/");
//                 }
//             });
//         }
//     });
// });

// app.post("/addsortiment", function(req, res){
//     var numeSortiment = req.body.numeSortiment.toLowerCase();
//     var cantitate = req.body.cantitate;
    
//     Coffee.create({
//        name: numeSortiment,
//        cantitateVerde: cantitate,
//        cantitatePrajita: 0 
//     }, function(err, coffee){
//         if(err){
//             console.log(err);
//         } else {
//             res.redirect("/");
//         }
//     });
// });

// app.post("/removesortiment", function(req, res){
//     var sortiment = req.body.selectSortiment;

//     Coffee.deleteOne({name: sortiment}, function(err, result){
//         if(err){
//             console.log(err);
//         } else {
//             res.redirect("/");
//         }
//     });
// });

// app.listen(3000, function(){
//     console.log("Server started");
// });





// var arr = [];
// Coffee.find({}, function(err, coffee){
//     if(err){
//         console.log(err);
//     } else {
//         for(var i = 0; i < coffee.length; i++){
//             arr.push(coffee[i]);
//         } 
//     }
//     res.render("home", {arrCoffee: arr});
// });