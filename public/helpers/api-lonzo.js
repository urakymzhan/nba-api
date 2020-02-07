
const lonzohtml = document.querySelector('.lonzo-info');


//  get player info from /lonzo api
const callLonzo = async () => {
    try {
        let playerData  = await fetch('/lonzo');
        let playerArray = await playerData.json();
        let playerJson = playerArray[0]
        return playerJson;
    }
    catch (err) {
    console.log('/lonzo api failed', err);
  }
}

const getLonzo = async () => {
    let jsonData = await callLonzo();
            const players = Object.entries(jsonData)
            players.map((player) => {
                //  i don't want to display all info from API
                const condition = ["firstName", "lastName", "birthdate", "school", "country", "height", "weight"
                , "jersey", "position", "rosterstatus", "teamName","teamCity","fromYear","toYear","gamesPlayedFlag",
                    "draftYear", "draftRound", "draftNumber"];
                    condition.forEach((word) => {
                        if (player[0].includes(word)) {
                            lonzohtml.innerHTML += `<li>${player[0]}  :  ${player[1]} </li>`
                        }
                    })
            })
}
getLonzo();