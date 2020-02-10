

const nextEventName = document.querySelector('.event-name');
const nextEventDate = document.querySelector('.event-date');
const nextEvenTAddress = document.querySelector(".event-address");
const nextEvenTCity = document.querySelector(".event-city");
const nextEvenTState = document.querySelector(".event-state");



const getNOPNextEvent = () => {
    fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/3")
    .then(news => { return news.json()
    })
    .then((response) => {
        // console.log(response.team.nextEvent[0]);
        console.log(response.team.standingSummary);
        console.log(response.team.record.items[0].description);
        console.log(response.team.record.items[0].summary);

        nextEventName.innerHTML = response.team.nextEvent[0].name;
        nextEventDate.innerHTML = response.team.nextEvent[0].date;
        nextEvenTAddress.innerHTML = response.team.nextEvent[0].competitions[0].venue.fullName;
        nextEvenTCity.innerHTML = response.team.nextEvent[0].competitions[0].venue.address.city;
        nextEvenTState.innerHTML = response.team.nextEvent[0].competitions[0].venue.address.state;
        
    })
    .catch((err) => {
        console.log("nop news api failed: ", err);
    })
}

getNOPNextEvent();

const standingSummary = document.querySelector(".standing-summary");
const overallRecord = document.querySelector(".overall-record");
const recordSummary = document.querySelector(".record-summary");

const getNOPRecord = () => {
    fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/3")
    .then(news => { return news.json()
    })
    .then((response) => {
        // console.log(response.team.nextEvent[0]);
        console.log(response.team.nextEvent[0].competitions[0].venue);

        standingSummary.innerHTML = response.team.standingSummary;
        overallRecord.innerHTML = response.team.record.items[0].description;
        recordSummary.innerHTML = response.team.record.items[0].summary;
        
    })
    .catch((err) => {
        console.log("nop news api failed: ", err);
    })
}

getNOPRecord();




