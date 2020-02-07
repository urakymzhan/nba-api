
const zionhtml = document.querySelector('.zion-info');


//  get player info from /zion api
const callZion = async () => {
    try {
        let playerData  = await fetch('/zion');
        let playerArray = await playerData.json();
        let playerJson = playerArray[0]
        console.log(playerJson);
        return playerJson;
    }
    catch (err) {
    console.log('/zion api failed', err);
  }
}

const getZion = async () => {
    let jsonData = await callZion();
            const players = Object.entries(jsonData)
            players.map((player) => {
                //  i don't want to display all info from API
                const condition = ["firstName", "lastName", "birthdate", "school", "country", "height", "weight"
                , "jersey", "position", "rosterstatus", "teamName","teamCity","fromYear","toYear","gamesPlayedFlag",
                    "draftYear", "draftRound", "draftNumber"];
                    condition.forEach((word) => {
                        if (player[0].includes(word)) {
                            zionhtml.innerHTML += `<li>${player[0]}  :  ${player[1]} </li>`
                        }
                    })
            })
}
getZion();