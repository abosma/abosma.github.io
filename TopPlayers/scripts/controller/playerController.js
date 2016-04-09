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
    i = 0;
    $.ajax({
        url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/' + summonerID + '/masteries?api_key=bacda479-8776-49a8-a67b-41579494c93c',
        type: 'GET',
        dataType: 'json',
        data: {

        },
        success: function (mpages) {
            mpages[summonerID].pages.forEach(function (item) {
                if (item.current == false) {
                    i++;
                    document.getElementById("sMasteries").innerHTML = document.getElementById("sMasteries").innerHTML + i + ". " + item.name + "<br />";
                } else if (item.current == true) {
                    i++;
                    document.getElementById("sMasteries").innerHTML = document.getElementById("sMasteries").innerHTML + i + ". " + "<b>Current: </b>" + item.name + "<br />";
                }

                createMButtons(i);

                item.masteries.forEach(function (sId) {
                    mPageChanger(sId.id, sId.rank, i);
                })
              });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("error getting Summoner data!");
        }
    });
}

function mPageChanger(masteryID, masteryRank, masteryPage) {
    $.ajax({
        url: 'https://na.api.pvp.net/api/lol/static-data/na/v1.2/mastery/' + masteryID + '?api_key=bacda479-8776-49a8-a67b-41579494c93c',
        type: 'GET',
        dataType: 'json',
        data: {

        },
        success: function (mPagesC) {
            document.getElementById("sMasteriesID").innerHTML = document.getElementById("sMasteriesID").innerHTML + masteryPage + ". " + mPagesC.name + " Points: " + masteryRank + "<br />";
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("error getting Summoner data!");
        }
    });
}

function createMButtons(masteryPage) {
    var btn = document.createElement("BUTTON");
    btn.setAttribute("id", "mPage" + masteryPage);
    document.body.appendChild(btn);
    document.getElementById("mPage" + masteryPage).addEventListener("click", function () {
        document.getElementById("mPageBG").style.visibility = "visible";
    });
}