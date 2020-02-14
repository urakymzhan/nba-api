
const apiScore = document.querySelector(".live-api-score");
const currentDate = document.querySelector(".score-date-api");

// Current Date
// momentjs CDN used on browser
const today = moment().format('LL');
currentDate.innerHTML = today;

const getScoreboard = () => {
    fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard")
    .then(scores => { return scores.json()
    })
    .then((response) => {
        console.log(response.events);
        console.log(response.events[1].competitions[0].competitors[0].score);
        console.log(response.events[1].competitions[0].competitors[1].score);

        for(let i=0; i< response.events.length; i++) {
            let shortname = response.events[i].shortName.replace("@", "-");
            apiScore.innerHTML += `<li style="font-size: 14px;"> <span style="color:red;"> ${shortname}</span>   
            <br> <span>s: ${response.events[0].competitions[0].competitors[0].score} - ${response.events[0].competitions[0].competitors[1].score} </span>
            <br> <span style="color:gray;"> p: ${response.events[i].status.period} </span>
            </li>`; 
        }
        // console.log(response.events); 
    })
    .catch((err) => {
        console.log("scoresboard api failed: ", err);
    })

}
getScoreboard();
