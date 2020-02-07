
const newsImg1= document.querySelector('.news-img1');
const description1 = document.querySelector('.description1');
const headline1 = document.querySelector('.headline1');

const newsImg2= document.querySelector('.news-img2');
const description2 = document.querySelector('.description2');
const headline2 = document.querySelector('.headline2');

const newsImg3= document.querySelector('.news-img3');
const description3 = document.querySelector('.description3');
const headline3 = document.querySelector('.headline3');

const getNews = () => {
    fetch("http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news")
    .then(news => { return news.json()
    })
    .then((response) => {
        console.log(response.articles);
        console.log(response.articles[0].description);

        // headline
        headline1.innerHTML = response.articles[0].headline;
        // description
        description1.innerHTML = response.articles[0].description;
        // image
        var img1 = document.createElement("img");
        img1.setAttribute("src", response.articles[0].images[0].url);
        newsImg1.appendChild(img1);

        // headline
        headline2.innerHTML = response.articles[1].headline;
        // description
        description2.innerHTML = response.articles[1].description;
        // image
        var img2 = document.createElement("img");
        img2.setAttribute("src", response.articles[1].images[0].url);
        newsImg2.appendChild(img2);

        // headline
        headline3.innerHTML = response.articles[2].headline;
        // description
        description3.innerHTML = response.articles[2].description;
        // image
        var img3 = document.createElement("img");
        img3.setAttribute("src", response.articles[2].images[0].url);
        newsImg3.appendChild(img3)
        
    })
    .catch((err) => {
        console.log("news api failed: ", err);
    })

}

getNews();