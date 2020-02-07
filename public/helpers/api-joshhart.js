
const joshharthtml = document.querySelector('.joshhart-info');


//  get player info from /joshhart api
const callJoshhart = async () => {
    try {
        let playerData  = await fetch('/joshhart');
        let playerArray = await playerData.json();
        let playerJson = playerArray[0]
        console.log(playerJson);
        return playerJson;
    }
    catch (err) {
    console.log('/joshhart api failed', err);
  }
}

const getJoshhart = async () => {
    let jsonData = await callJoshhart();
            const players = Object.entries(jsonData)
            players.map((player) => {
                //  i don't want to display all info from API
                const condition = ["firstName", "lastName", "birthdate", "school", "country", "height", "weight"
                , "jersey", "position", "rosterstatus", "teamName","teamCity","fromYear","toYear","gamesPlayedFlag",
                    "draftYear", "draftRound", "draftNumber"];
                    condition.forEach((word) => {
                        if (player[0].includes(word)) {
                            joshharthtml.innerHTML += `<li>${player[0]}  :  ${player[1]} </li>`
                        }
                    })
            })
}
getJoshhart();