
const apiScore = document.querySelector(".live-api-score");
const currentDate = document.querySelector(".score-date-api");


// Current Date
// momentjs CDN used on browser
const today = moment().format('LL');
currentDate.innerHTML = today;


//  get score info from /score api
const getScoreData = async () => {
    try {
    let playerData  = await fetch('/score');
    let playerArray = await playerData.json();
    let playerJson = playerArray.lineScore
    return playerJson;
    }
    catch (err) {
    console.log('/score api failed: ', err);
  }  
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
        //  TODO: change it to create element attribute
        if (removed[2] === null || removed[5] === null) {
            apiScore.innerHTML += `<li>${removed[1]} - ${removed[4]} <br> <span class="score-span"> 0 - 0 </span> </li>`
        }
        else {
            apiScore.innerHTML += `<li>${removed[1]} - ${removed[4]} <br> <span class="score-span">${removed[2]} - ${removed[5]} </span> </li>`
        }
    }      
}
getScore();

