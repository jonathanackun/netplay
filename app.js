var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const util = require('util');
var Games     = require('./public/models/games');
 
// MongoDB
 mongoose.connect('mongodb://localhost/gameapp');
 
 
// Express
var app = express();
var json ="";
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/gameList', function(req,res){
Games.find(function(err, games) {            
            if (err)
                res.send(err)
            
            //res.sendfile('./public/index.html');
            //console.log(JSON.stringify(games));
            json = JSON.stringify(games);
            res.send(json);
            // console.log(json.length);
        });
});
app.get('/', function(req, res) {
        res.sendfile('./public/index.html'); 
    });

app.listen(3000, function() {
  console.log('Express server listening on 3000');
});