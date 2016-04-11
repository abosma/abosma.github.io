var player = [];
var playerName = [];

function summonerLookUp() {

    getSummonerID();

}

function getSummonerID() {
    var SUMMONER_NAME = "";
    SUMMONER_NAME = $("#userName").val();

    if (SUMMONER_NAME !== "") {

        $.ajax({
            url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=bacda479-8776-49a8-a67b-41579494c93c',
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

                var found = $.inArray(json[SUMMONER_NAME_NOSPACES].id, player) > -1;
                var found2 = $.inArray(SUMMONER_NAME, playerName) > -1;

                if (found) {
                    console.log("Player already in player array");
                } else {
                    player.push(json[SUMMONER_NAME_NOSPACES].id);
                }

                if (found2) {
                    console.log("PlayerName already in playerName array");
                } else {
                    playerName.push(SUMMONER_NAME);
                }

                for (a = 0 ; a < player.length ; a++) {
                    document.getElementById("summoner" + (a + 1)).innerHTML = playerName[a] + "<br />";
                }

                console.log(player);
                console.log(playerName);

                //getSummonerStats(summonerID);

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
    } else { }
}

function getSummonerStats(summonerID) {
    $.ajax({
        url: 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/' + summonerID + '/summary?season=SEASON2016&api_key=bacda479-8776-49a8-a67b-41579494c93c',
        type: 'GET',
        dataType: 'json',
        data: {

        },
        success: function (mpages) {
            mpages[playerStatSummaries].forEach(function (item) {
                if (item.playerStatSummaryType == "RankedSolo5x5") {
                    document.getElementById("summoner1").innerHTML = item.aggregatedStats[0];
                }
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("error getting Summoner data!");
        }
    });
}