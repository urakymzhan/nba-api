

const apiInfo = document.querySelector('.lonzo-info');
const apiScore = document.querySelector(".live-api-score");
const currentDate = document.querySelector(".score-date-api");


// Current Date
// moment CDN used on browser
const today = moment().format('LL');
currentDate.innerHTML = today;


//  get player info from api
const getPlayerInfo = async () => {
    let playerData  = await fetch('/info');
    let playerArray = await playerData.json();
    let playerJson = await playerArray[0]
    return playerJson;
}

const getPlayer = async () => {
    let jsonData = await getPlayerInfo();
            const players = Object.entries(jsonData)
            players.map((player) => {
                //  i don't want to display all info from API
                const condition = ["firstName", "lastName", "birthdate", "school", "country", "height", "weight"
                , "jersey", "position", "rosterstatus", "teamName","teamCity","fromYear","toYear","gamesPlayedFlag",
                    "draftYear", "draftRound", "draftNumber"];
                    condition.forEach((word) => {
                        if (player[0].includes(word)) {
                            apiInfo.innerHTML += `<li>${player[0]}  :  ${player[1]} </li>`
                        }
                    })
            })
}
getPlayer();

//  get score info from api
const getScoreData = async () => {
    let playerData  = await fetch('/score');
    let playerArray = await playerData.json();
    let playerJson = await playerArray.lineScore
    return playerJson;
}

const getScore = async () => {
    let jsonData = await getScoreData();
    const iNeed = jsonData.reduce(function(filtered, option) {
            filtered.push(option.gameId);
            filtered.push(option.teamCityName);
            filtered.push(option.pts);

        return filtered;
    }, [])
    for(let i=0; i<iNeed.length; i++) {
    let removed = iNeed.splice(0, 6);
    // console.log(removed);
     apiScore.innerHTML += `<li>${removed[1]} - ${removed[4]} <br> ${removed[2]} - ${removed[5]}</li>`
    }      
}
getScore();

