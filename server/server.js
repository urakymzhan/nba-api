const express = require('express');
const path = require('path');

// express app and port
const app = express();
const PORT = process.env.PORT || 3000;

//  cors --> loading too long
// const cors = require('cors');
// app.use(cors);

// current date
// var moment = require('moment');
// const today = moment().format("l");

// serve static files
app.use(express.static(__dirname + '/../public/'));

// MAIN ROUTE
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public'));
});


app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
})


// NBA API requirement
const NBA = require("nba");

// SCORE ENDPOINT - NOTE: using different API now on the browser
// NBA.stats.scoreboard({ gameDate: `${today}` })
//     .then((score) => {
//         app.get('/score', function(req, res, next) {
//             res.send(score);
//         })
//     })
//     .catch((err) => {
//         console.log('scoreboard api failed', err)
// });



// // Pelicans players
const lonzo = NBA.findPlayer('lonzo ball');
const ingram = NBA.findPlayer('Brandon Ingram');
const zion = NBA.findPlayer('Zion Williamson');
const joshhart = NBA.findPlayer('Josh Hart');
const jrue = NBA.findPlayer('Jrue Holiday');
const jjredick = NBA.findPlayer('JJ Redick');
const derrick = NBA.findPlayer('Derrick Favors');
const jaxson = NBA.findPlayer('Jaxson Hayes');
const jahlil = NBA.findPlayer('Jahlil Okafor');
const nickeil = NBA.findPlayer('Nickeil Alexander-Walker');
const zylan = NBA.findPlayer('Zylan Cheatham');
const joshgray = NBA.findPlayer('Josh Gray');
const frank = NBA.findPlayer('Frank Jackson');
const nicolo = NBA.findPlayer('Nicolo Melli');
const darius = NBA.findPlayer('Darius Miller');
const kenrich = NBA.findPlayer('Kenrich Williams');
const etuan = NBA.findPlayer("E'Twaun Moore");

const names = [lonzo, ingram, zion, joshhart, jrue, jjredick, derrick, jaxson, jahlil, nickeil, zylan, joshgray, frank, nicolo, darius, kenrich, etuan];
const ids = [ 1628366, 1627742, 1629627, 1628404, 201950, 200755, 202324, 1629637, 1626143, 1629638, 1629597, 1627982, 1628402, 1629740, 203121, 1629026, 202734];



// TODO:when i bomb an nba api with requests its giving back ETIMEDOUT error. Or partically giving data and unstable.

NBA.stats.playerInfo({ PlayerID: lonzo.playerId })
    .then((lonzo) => {
        app.get('/lonzo', function(req, res) {
            res.send(lonzo.commonPlayerInfo);
        })
    })
    .catch((err) => {
        console.log('lonzo api failed', err)
});

NBA.stats.playerInfo({ PlayerID: ingram.playerId })
    .then((ingram) => {
        app.get('/ingram', function(req, res) {
            res.send(ingram.commonPlayerInfo);
        })
    })
    .catch((err) => {
        console.log('ingram api failed', err)
});

NBA.stats.playerInfo({ PlayerID: zion.playerId })
    .then((zion) => {
        app.get('/zion', function(req, res) {
            res.send(zion.commonPlayerInfo);
        })
    })
    .catch((err) => {
        console.log('zion api failed', err)
});

// NBA.stats.playerInfo({ PlayerID: joshhart.playerId })
//     .then((joshhart) => {
//         app.get('/joshhart', function(req, res) {
//             res.send(joshhart.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('joshhart api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: jrue.playerId })
//     .then((jrue) => {
//         app.get('/jrue', function(req, res) {
//             res.send(jrue.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('jrue api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: jjredick.playerId })
//     .then((jjredick) => {
//         app.get('/jjredick', function(req, res) {
//             res.send(jjredick.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('jjredick api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: derrick.playerId })
//     .then((derrick) => {
//         app.get('/derrick', function(req, res) {
//             res.send(derrick.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('derrick api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: jaxson.playerId })
//     .then((jaxson) => {
//         app.get('/jaxson', function(req, res) {
//             res.send(jaxson.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('jaxson api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: jahlil.playerId })
//     .then((jahlil) => {
//         app.get('/jahlil', function(req, res) {
//             res.send(ingram.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('jahlil api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: nickeil.playerId })
//     .then((nickeil) => {
//         app.get('/nickeil', function(req, res) {
//             res.send(nickeil.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('nickeil api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: zylan.playerId })
//     .then((zylan) => {
//         app.get('/zylan', function(req, res) {
//             res.send(zylan.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('zylan api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: joshgray.playerId })
//     .then((joshgray) => {
//         app.get('/joshgray', function(req, res) {
//             res.send(joshgray.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('joshgray api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: frank.playerId })
//     .then((frank) => {
//         app.get('/frank', function(req, res) {
//             res.send(frank.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('frank api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: nicolo.playerId })
//     .then((nicolo) => {
//         app.get('/nicolo', function(req, res) {
//             res.send(nicolo.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('nicolo api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: darius.playerId })
//     .then((darius) => {
//         app.get('/darius', function(req, res) {
//             res.send(darius.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('darius api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: kenrich.playerId })
//     .then((kenrich) => {
//         app.get('/kenrich', function(req, res) {
//             res.send(kenrich.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('kenrich api failed', err)
// });

// NBA.stats.playerInfo({ PlayerID: etuan.playerId })
//     .then((etuan) => {
//         app.get('/etuan', function(req, res) {
//             res.send(kenrich.commonPlayerInfo);
//         })
//     })
//     .catch((err) => {
//         console.log('etuan api failed', err)
// });



//  TODO:when i bomb an nba api with requests its giving back ETIMEDOUT error. Or partically giving data and unstable.
// let total = [];
// ids.map((id) => {
//     NBA.stats.playerInfo({ PlayerID: id })
//         .then(info => info
//             // console.log(info)   
//         )
//         .then((result) => {
//             helper(result);
//         })
//         .catch((err) => {
//             console.log('info api failed', err)
//     });  
// })
// const helper = (result) => {
//     total.push(result);
//     console.log(result);
//     app.get('/info', function(req, res, next) {
//         res.send(total);
//     }) 
// }

//  TODO: work this out with Promise.all or async await
// var lonzoPromise  = NBA.stats.playerInfo({ PlayerID: lonzo.playerId });
// var ingramPromise  = NBA.stats.playerInfo({ PlayerID: ingram.playerId });
// var zionPromise  = NBA.stats.playerInfo({ PlayerID: zion.playerId });
// var joshhartPromise  = NBA.stats.playerInfo({ PlayerID: joshhart.playerId });
// var jruePromise  = NBA.stats.playerInfo({ PlayerID: jrue.playerId });
// var jjreddickPromise  = NBA.stats.playerInfo({ PlayerID: jjredick.playerId });
// var derrickPromise  = NBA.stats.playerInfo({ PlayerID: derrick.playerId });
// var jaxsonPromise  = NBA.stats.playerInfo({ PlayerID: jaxson.playerId });
// var jahlilPromise  = NBA.stats.playerInfo({ PlayerID: jahlil.playerId });
// var nickeilPromise  = NBA.stats.playerInfo({ PlayerID: nickeil.playerId });  
// var zylanPromise  = NBA.stats.playerInfo({ PlayerID: zylan.playerId });
// var joshgrayPromise  = NBA.stats.playerInfo({ PlayerID: joshgray.playerId });
// var frankPromise  = NBA.stats.playerInfo({ PlayerID: frank.playerId });  
// var nicoloPromise  = NBA.stats.playerInfo({ PlayerID: nicolo.playerId });
// var dariusPromise  = NBA.stats.playerInfo({ PlayerID: darius.playerId });
// var kenrichPromise  = NBA.stats.playerInfo({ PlayerID: kenrich.playerId });  
// var etuanPromise  = NBA.stats.playerInfo({ PlayerID: etuan.playerId });
// function allSkippingErrors(promises) {
//   return Promise.all( promises.map(p => p.catch(error => null)))
//             .then(values => { 
//                 console.log(values); 
//             })
// }
// allSkippingErrors(promises);







