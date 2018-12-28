var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

app.use(cors());


const statsRoute = require('./routes/Stats');

//mongoose.connect('mongodb://localhost:27017/statsApi');
mongoose.connect('mongodb://admin:admin1@ds145194.mlab.com:45194/personal-stats-api')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/Stats', statsRoute);

var db = mongoose.connection;

app.listen(3000, ()=>{
    console.log("Server is running");
});