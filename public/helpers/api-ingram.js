
const ingramhtml = document.querySelector('.ingram-info');


//  get player info from /lonzo api
const callIngram = async () => {
    try {
        let playerData  = await fetch('/ingram');
        let playerArray = await playerData.json();
        let playerJson = playerArray[0]
        console.log(playerJson);
        return playerJson;
    }
    catch (err) {
    console.log('/ingram api failed', err);
  }
}

const getIngram = async () => {
    let jsonData = await callIngram();
            const players = Object.entries(jsonData)
            players.map((player) => {
                //  i don't want to display all info from API
                const condition = ["firstName", "lastName", "birthdate", "school", "country", "height", "weight"
                , "jersey", "position", "rosterstatus", "teamName","teamCity","fromYear","toYear","gamesPlayedFlag",
                    "draftYear", "draftRound", "draftNumber"];
                    condition.forEach((word) => {
                        if (player[0].includes(word)) {
                            ingramhtml.innerHTML += `<li>${player[0]}  :  ${player[1]} </li>`
                        }
                    })
            })
}
getIngram();