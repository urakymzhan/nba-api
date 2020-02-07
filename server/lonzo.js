
const NBA = require("nba");
const lonzo = NBA.findPlayer('lonzo ball');

NBA.stats.playerInfo({ PlayerID: lonzo.playerId })
    .then((lonzo) => {
        console.log(lonzo.commonPlayerInfo);
        app.get('/info', function(req, res) {
            res.send(lonzo.commonPlayerInfo);
        })
    })
    .catch((err) => {
        console.log('lonzo api failed', err)
});