const express = require('express');
const path = require('path');


// define express app
const app = express();
const PORT = process.env.PORT || 3000;

//  cors --> loading too long
// const cors = require('cors');
// app.use(cors);

// current date
var moment = require('moment');
const today = moment().format("l");

// serve static files
app.use(express.static(__dirname + '/../public/'));

// routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public'));
});


app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
})


//  NBA API call
const NBA = require("nba");
const lonzo = NBA.findPlayer('Lonzo Ball');

app.get('/data', function(req, res) {
    res.send(lonzo);
});


NBA.stats.playerInfo({ PlayerID: lonzo.playerId }).then((info) => {
    app.get('/info', function(req, res) {
        res.send(info.commonPlayerInfo);
    });
});

NBA.stats.scoreboard({ gameDate: `${today}` }).then((score) => {
    app.get('/score', function(req, res) {
        res.send(score);
    });
});

// console.log(info);


