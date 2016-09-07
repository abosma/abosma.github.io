var player = [];
var playerName = [];
var playerIconID = [];

function summonerLookUp(REGION) {

    getSummonerID(REGION);

}

function getSummonerID(REGION) {
    var SUMMONER_NAME = "";
    SUMMONER_NAME = $("#userName").val();

    if (SUMMONER_NAME !== "") {
        $.ajax({
            url: 'https://' + REGION + '.api.pvp.net/api/lol/' + REGION + '/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=3aab1f3c-ddc0-4bf8-91d8-ec12113790c5',
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(/\s/g, "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

                var found = $.inArray(json[SUMMONER_NAME_NOSPACES].id, player) > -1;
                var found2 = $.inArray(SUMMONER_NAME, playerName) > -1;
                var found3 = $.inArray(json[SUMMONER_NAME_NOSPACES].profileIconId, playerIconID) > -1;

                if (found) {
                    console.log("Player already in player array");
                } else {
                    if (player.length < 5) {
                        player.push(json[SUMMONER_NAME_NOSPACES].id);
                    } else {
                        console.log("Too many players");
                    }
                }

                if (found2) {
                    console.log("PlayerName already in playerName array");
                } else {
                    if (playerName.length < 5) {
                        playerName.push(SUMMONER_NAME);
                    } else {
                        console.log("Too many playerNames");
                    }
                }

                if (found3) {
                    console.log("Player icon ID already in array");
                } else {
                    if (playerIconID.length < 5) {
                        playerIconID.push(json[SUMMONER_NAME_NOSPACES].profileIconId);
                    } else {
                        console.log("Too many playerIconID's");
                    }
                }

                if (player.length == 1) {
                    document.getElementById("b1").style.visibility = "visible";
                }

                if (player.length == 2) {
                    document.getElementById("b1").style.visibility = "visible";
                    document.getElementById("b2").style.visibility = "visible";
                }

                if (player.length == 3) {
                    document.getElementById("b1").style.visibility = "visible";
                    document.getElementById("b2").style.visibility = "visible";
                    document.getElementById("b3").style.visibility = "visible";
                }

                if (player.length == 4) {
                    document.getElementById("b1").style.visibility = "visible";
                    document.getElementById("b2").style.visibility = "visible";
                    document.getElementById("b3").style.visibility = "visible";
                    document.getElementById("b4").style.visibility = "visible";
                }

                if (player.length == 5) {
                    document.getElementById("b1").style.visibility = "visible";
                    document.getElementById("b2").style.visibility = "visible";
                    document.getElementById("b3").style.visibility = "visible";
                    document.getElementById("b4").style.visibility = "visible";
                    document.getElementById("b5").style.visibility = "visible";
                }

                for (b = 0 ; b < player.length ; b++) {
                    if (document.getElementById("playerIcon" + b) == null) {
                        var profileImage = [];

                        if (b == 0) {
                            profileImage[0] = document.createElement('IMG');
                            profileImage[0].setAttribute("src", "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/profileicon/" + playerIconID[0] + ".png");
                            profileImage[0].setAttribute("id", "playerIcon" + b);
                            profileImage[0].setAttribute("style", "position:absolute;z-index:0;")
                            document.body.appendChild(profileImage[0]);
                            profileImage[0].style.left = 6 + "%";
                            profileImage[0].style.top = 60 + "%";
                        } else if (b == 1) {
                            profileImage[1] = document.createElement('IMG');
                            profileImage[1].setAttribute("src", "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/profileicon/" + playerIconID[1] + ".png");
                            profileImage[1].setAttribute("id", "playerIcon" + b);
                            profileImage[1].setAttribute("style", "position:absolute;z-index:0;")
                            document.body.appendChild(profileImage[1]);
                            profileImage[1].style.left = 26 + "%";
                            profileImage[1].style.top = 60 + "%";
                        } else if (b == 2) {
                            profileImage[2] = document.createElement('IMG');
                            profileImage[2].setAttribute("src", "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/profileicon/" + playerIconID[2] + ".png");
                            profileImage[2].setAttribute("id", "playerIcon" + b);
                            profileImage[2].setAttribute("style", "position:absolute;z-index:0;")
                            document.body.appendChild(profileImage[2]);
                            profileImage[2].style.left = 46 + "%";
                            profileImage[2].style.top = 60 + "%";
                        } else if (b == 3) {
                            profileImage[3] = document.createElement('IMG');
                            profileImage[3].setAttribute("src", "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/profileicon/" + playerIconID[3] + ".png");
                            profileImage[3].setAttribute("id", "playerIcon" + b);
                            profileImage[3].setAttribute("style", "position:absolute;z-index:0;")
                            document.body.appendChild(profileImage[3]);
                            profileImage[3].style.left = 66 + "%";
                            profileImage[3].style.top = 60 + "%";
                        } else if (b == 4) {
                            profileImage[4] = document.createElement('IMG');
                            profileImage[4].setAttribute("src", "http://ddragon.leagueoflegends.com/cdn/6.9.1/img/profileicon/" + playerIconID[4] + ".png");
                            profileImage[4].setAttribute("id", "playerIcon" + b);
                            profileImage[4].setAttribute("style", "position:absolute;z-index:0;")
                            document.body.appendChild(profileImage[4]);
                            profileImage[4].style.left = 86 + "%";
                            profileImage[4].style.top = 60 + "%";
                        }

                        console.log(b);

                    }
                }

                for (a = 0 ; a < player.length ; a++) {
                    document.getElementById("summoner" + (a + 1)).innerHTML = playerName[a] + "<br />";
                    getSummonerStats(REGION, player[a], a);
                }

                console.log(player);
                console.log(playerName);
                console.log(playerIconID);


            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
    } else { }
}

function getSummonerStats(REGION, summonerID, currentPlayer) {
    $.ajax({
        url: 'https://' + REGION + '.api.pvp.net/api/lol/' + REGION + '/v1.3/stats/by-summoner/' + summonerID + '/summary?season=SEASON2016&api_key=3aab1f3c-ddc0-4bf8-91d8-ec12113790c5',
        type: 'GET',
        dataType: 'json',
        data: {

        },
        success: function (mpages) {
            for (b = 0 ; b < 24 ; b++) {
                if (mpages.playerStatSummaries[b].playerStatSummaryType == "RankedSolo5x5") {
                    document.getElementById("summoner" + (currentPlayer + 1)).innerHTML = document.getElementById("summoner" + (currentPlayer + 1)).innerHTML
                        + "<br />" + "Kills: " + mpages.playerStatSummaries[b].aggregatedStats.totalChampionKills
                        + "<br />" + "Assists: " + mpages.playerStatSummaries[b].aggregatedStats.totalAssists
                        + "<br />" + "CS: " + (mpages.playerStatSummaries[b].aggregatedStats.totalMinionKills + mpages.playerStatSummaries[b].aggregatedStats.totalNeutralMinionsKilled)
                        + "<br />" + "Turret Kills: " + mpages.playerStatSummaries[b].aggregatedStats.totalTurretsKilled
                        + "<br />" + "<br />" + "Games: " + (mpages.playerStatSummaries[b].wins + mpages.playerStatSummaries[b].losses)
                        + "<br />" + "W: " + mpages.playerStatSummaries[b].wins + "<br />" + "L: " + mpages.playerStatSummaries[b].losses
                        + "<br />" + "<br />" + "Avg CS p/g: " + Math.round(((mpages.playerStatSummaries[b].aggregatedStats.totalMinionKills + mpages.playerStatSummaries[b].aggregatedStats.totalNeutralMinionsKilled) / (mpages.playerStatSummaries[b].wins + mpages.playerStatSummaries[b].losses)))
                        + "<br />" + "Avg Kills p/g: " + Math.round((mpages.playerStatSummaries[b].aggregatedStats.totalChampionKills / (mpages.playerStatSummaries[b].wins + mpages.playerStatSummaries[b].losses)) * 100) / 100
                        + "<br />" + "Avg Assists p/g: " + Math.round((mpages.playerStatSummaries[b].aggregatedStats.totalAssists / (mpages.playerStatSummaries[b].wins + mpages.playerStatSummaries[b].losses)) * 100) / 100
                        + "<br />" + "Avg Turret Kills p/g: " + Math.round((mpages.playerStatSummaries[b].aggregatedStats.totalTurretsKilled / (mpages.playerStatSummaries[b].wins + mpages.playerStatSummaries[b].losses)) * 100) / 100;
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("error getting Summoner data!");
        }
    });
}

function clearS1() {
    player.splice(0, 1);
    playerName.splice(0, 1);
    playerIconID.splice(0, 1);
    document.getElementById("summoner1").innerHTML = "";
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("playerIcon0").remove();
    console.log(player);
    console.log(playerName);
}
function clearS2() {
    player.splice(1, 1);
    playerName.splice(1, 1);
    playerIconID.splice(1, 1);
    document.getElementById("summoner2").innerHTML = "";
    document.getElementById("b2").style.visibility = "hidden";
    document.getElementById("playerIcon1").remove();
    console.log(player);
    console.log(playerName);
}
function clearS3() {
    player.splice(2, 1);
    playerName.splice(2, 1);
    playerIconID.splice(2, 1);
    document.getElementById("summoner3").innerHTML = "";
    document.getElementById("b3").style.visibility = "hidden";
    document.getElementById("playerIcon2").remove();
    console.log(player);
    console.log(playerName);
}
function clearS4() {
    player.splice(3, 1);
    playerName.splice(3, 1);
    playerIconID.splice(3, 1);
    document.getElementById("summoner4").innerHTML = "";
    document.getElementById("b4").style.visibility = "hidden";
    document.getElementById("playerIcon3").remove();
    console.log(player);
    console.log(playerName);
}
function clearS5() {
    player.splice(4, 1);
    playerName.splice(4, 1);
    playerIconID.splice(4, 1);
    document.getElementById("summoner5").innerHTML = "";
    document.getElementById("b5").style.visibility = "hidden";
    document.getElementById("playerIcon4").remove();
    console.log(player);
    console.log(playerName);
}