var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = "8001";
var mongo= require('mongodb');
var mongoClient=mongo.MongoClient;

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/home', function(req, res) {
    res.sendFile(__dirname + "/public/views/index.html");
  });

app.listen(8080, function() {
    console.log('Server running at http://127.0.0.1:8080/');
  });

app.listen(port, function() {
    console.log("Server running at:" + port);
  })


app.post("/response", function(req, res) {
    var t = req.body;

    mongoClient.connect("mongodb://localhost:27017/query", function(err,db){
cursor =db.collection('response').find({"name1":t.text},{"name2":1, "_id":0});
       cursor.each(function(err, doc) {
          if (doc != null) {
            console.log(doc);
          res.send(doc);
            }
        
       });

    })


});
