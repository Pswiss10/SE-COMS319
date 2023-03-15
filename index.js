


var mouseIn = false;
let playerData = {
    "pGaurds" : [
        {
            "name" : "Luka Doncic",
            "link" : "https://insider.espn.com/nba/player/hollinger/_/id/3945274/luka-doncic",
            "description" : "Luka Doncic has been on an incredible 2022-2023 season, being the first ever player to get a 60/20/10 triple double. With his high Assist Ratio, shot percentage, and incredible playmaking skills; Luka deserves to be on the top of this list.",
            "picture" : "../images/lucaD.webp"
        },
        {
            "name" : "Damian Lillard",
            "link" : "https://insider.espn.com/nba/player/hollinger/_/id/6606/damian-lillard",
            "description" : "Damian Lillard has also had a great 2023 season. With a Higher point average then Shai, but lower field goal percentage. With slightly worse stats to Shai, Damian should be right behind him at number 2.",
            "picture" : "../images/Damian-Lillard.webg"
        },
        {
            "name" : "Shai Gilgeous-Alexander",
            "link" : "https://insider.espn.com/nba/player/hollinger/_/id/4278073/shai-gilgeous-alexander",
            "description" : "Shai Gilgeous-Alexander has been having a tremendous season this year. Averaging 30.9 points per game and a high Field goal percentage, Shai makes his way to the number 3 spot.",
            "picture" : "../images/shaiGA.webp"
        }
    ],

    "sGaurds" : [
        {
            "name" : "Donovan Mitchell",
            "link" : "https://insider.espn.com/nba/player/hollinger/_/id/3908809/donovan-mitchell",
            "description" : "Donovan Mitchell has been performing amazingly this year for the Cavaliers. With an average of 27.4 points per game and a 47.7 feild goal percentage and an even better 61 True shoot percentage, Donovan Mitchell has been an integral player for the Cavalier's success this year. This places him at the number 1 spot on this ranking",
            "picture" : "../images/DonMitchell.webp"
        },
        {
            "name" : "Devin Booker",
            "link" : "https://insider.espn.com/nba/player/hollinger/_/id/3136193/devin-booker",
            "description" : "Devin Booker has been a monster on the court for the Suns. An average of 27.6 points per game, 59.3% true shot, and almost 6 assist per game; Booker has been bring a new meaning to the term Shooting Gaurd. With only a slightly worse shoot percentage than Mitchell, it puts Booker at number 2.",
            "picture" : "../images/DevinBooker.webp"
        },
        {
            "name" : "James Harden",
            "link" : "https://insider.espn.com/nba/player/hollinger/_/id/3992/james-harden",
            "description" : "James Harden has put on a show this year for the 76ers. Having 62.3 True shoot percentage and averaging a little over 10 points a game, James Harden is showing that he can still preform at the top of the league. The only downside of Harden's game is his lower average points per game being at 21.9. Even so, his play making abilities and ability to carry the offense has put Harden at number 3.",
            "picture" : "../images/JamesHarden.webp"
        }
    ]
}
fetch("data.json")
    .then(function (response) {
        response.json();
    })
    .then(function (data) {
        console.log(data);
    })

console.log(playerData);

var cards = document.getElementsByClassName("card-body");
if (cards != null) {
    console.log(cards.length);
    for(let i = 0; i < cards.length; ++i) {
        console.log(cards[i]);
        cards[i].addEventListener("mouseover", mouseOverHandler);
    }
}    

function mouseOverHandler(event) {
    if (event.target == event.currentTarget) {
        let cardId = event.currentTarget.id;
        switch (cardId) {
            case "lukaCard":
                flavorText = playerData.pGaurds[0].description;
                break;
            case "shaiCard":
                flavorText = playerData.pGaurds[1].description;
                break;
            case "dameCard":
                flavorText = playerData.pGaurds[2].description;
                break;
            case "donCard":
                flavorText = playerData.sGaurds[0].description;
                break;
            case "devinCard":
                flavorText = playerData.sGaurds[1].description;
                break;
            case "hardenCard":
                flavorText = playerData.sGaurds[2].description;
                break;
            }
            mouseIn = true;
            displayCardText(cardId, flavorText);
    } 

}

function displayCardText(cardId, flavorText) {
    if (flavorText != undefined && cardId != undefined) {
        let cardText = document.getElementById(cardId).getElementsByClassName("card-text")[0];
        cardText.innerHTML = flavorText + "\n";
    }
}