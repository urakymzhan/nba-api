
const jruehtml = document.querySelector('.jrue-info');


//  get player info from /jrue api
const callJrue = async () => {
    try {
        let playerData  = await fetch('/jrue');
        let playerArray = await playerData.json();
        let playerJson = playerArray[0]
        console.log(playerJson);
        return playerJson;
    }
    catch (err) {
    console.log('/jrue api failed', err);
  }
}

const getJrue = async () => {
    let jsonData = await callJrue();
            const players = Object.entries(jsonData)
            players.map((player) => {
                //  i don't want to display all info from API
                const condition = ["firstName", "lastName", "birthdate", "school", "country", "height", "weight"
                , "jersey", "position", "rosterstatus", "teamName","teamCity","fromYear","toYear","gamesPlayedFlag",
                    "draftYear", "draftRound", "draftNumber"];
                    condition.forEach((word) => {
                        if (player[0].includes(word)) {
                            jruehtml.innerHTML += `<li>${player[0]}  :  ${player[1]} </li>`
                        }
                    })
            })
}
getJrue();