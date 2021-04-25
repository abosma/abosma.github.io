var localPeerIdElement = document.getElementById("localPeerId");
var remotePeerIdInputElement = document.getElementById("remotePeerId");
var connectButtonElement = document.getElementById("connectButton");
var playerListElement = document.getElementById("playerList");

var players = [];

var peer = new Peer();
var conn = null;

peer.on("open", function(id) {
    localPeerIdElement.textContent = "Local ID: " + id;
});

connectButtonElement.addEventListener("click", function() {
    var remotePeerId = remotePeerIdInputElement.value;
    
    if(remotePeerId) {
        conn = peer.connect(remotePeerId);
        conn.on("open", function() {
            players.push(conn.peer);
            updatePlayerList();
        });
    };
});

peer.on("connection", function(conn) {
    var playerId = conn.peer;
    
    players.push(playerId);

    updatePlayerList();

    conn.on("data", function(data) {
        console.log(data);
    })

    conn.on("close", function() {
        for(var i = 0; i < players.length; i++) {
            if(players[i] == playerId) {
                players.splice(i, 1);
            }
        }
        updatePlayerList();
    })
});

function updatePlayerList() {
    playerListElement.innerHTML = "";
    
    for(var i = 0; i < players.length; i++) {
        var playerListItem = document.createElement("li");
        playerListItem.textContent = "Player: " + players[i];

        playerListElement.appendChild(playerListItem);
    }
}