
const apiScore = document.querySelector(".live-api-score");
// const currentDate = document.querySelector(".score-date-api");


const getScoreboard = () => {
    fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard")
    .then(scores => { return scores.json()
    })
    .then((response) => {

        for(let i=0; i< response.events.length; i++) {
            apiScore.innerHTML += `<li style="font-size: 12px;"> <span style="color:red; font-size: 14px;"> ${response.events[i].shortName}</span>  
            <br> displayClock: ${response.events[i].status.displayClock}
            <br> period: ${response.events[i].status.period}  </li>`; 
        }
        // console.log(response.events); 
    })
    .catch((err) => {
        console.log("scoresboard api failed: ", err);
    })

}
getScoreboard();
