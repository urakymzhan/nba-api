

const api = document.querySelector('.api-text');


// getData().then(data => {
//     // var text = JSON.stringify(data); 
//     // api.innerHTML = text;
//     // console.log(data);
//     console.log(data);

// })

// console.log(data);

// const getData = async () => {
//  let playerData  = await fetch('/data');
//  //use string literals
//  let playerJson = await playerData.json();
//  return playerJson;
// }

// const getPlayer = async () => {
//     let jsonData = await getData();
//         // for(let [key, value] of Object.entries(jsonData)) {
//         //     // console.log(`${key}: ${value}`);
//         //     api.innerHTML += `${key}: ${value} <br>`;
//         // }
//         console.log(jsonData)
//         // for(player in Object.keys(jsonData)){
//             const players = Object.entries(jsonData)
//             players.map((player) => {
//                 api.innerHTML += `<li>${player[0]}  :  ${player[1]} </li>`
//             })
//             // api.innerHTML += player;r
//             console.log(players)
//         // }
// }
// getPlayer();


const getData = async () => {
    let playerData  = await fetch('/info');
    //use string literals

    let playerArray = await playerData.json();
    let playerJson = await playerArray[0]
    console.log(playerJson)
    return playerJson;
}

const getPlayer = async () => {
    let jsonData = await getData();
        // console.log(jsonData)
        // for(player in Object.keys(jsonData)){
            const players = Object.entries(jsonData)
            players.map((player) => {
                api.innerHTML += `<li>${player[0]}  :  ${player[1]} </li>`
            })
            // api.innerHTML += player;r
            console.log(players)
        // }
}
getPlayer();
