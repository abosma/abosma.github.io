function summonerLookUp() {

    document.getElementById("sMasteries").innerHTML = "";
    document.getElementById("sMasteriesID").innerHTML = "";
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

                summonerID = json[SUMMONER_NAME_NOSPACES].id;

                getSummonerPages(summonerID);

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
    } else { }
}

function getSummonerPages(summonerID) {
    $.ajax({
        url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/' + summonerID + '/masteries?api_key=bacda479-8776-49a8-a67b-41579494c93c',
        type: 'GET',
        dataType: 'json',
        data: {

        },
        success: function (mpages) {
            mpages[summonerID].pages.forEach(function (item) {
                if (item.current == false) {
                    document.getElementById("sMasteries").innerHTML = document.getElementById("sMasteries").innerHTML + item.name + "<br />";
                } else if (item.current == true){
                    document.getElementById("sMasteries").innerHTML = document.getElementById("sMasteries").innerHTML + "<b>Current: </b>" + item.name + "<br />";
                }

                item.masteries.forEach(function (sId) {
                    document.getElementById("sMasteriesID").innerHTML = document.getElementById("sMasteriesID").innerHTML + sId.id + "<br />";
                })
              });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("error getting Summoner data!");
        }
    });
}