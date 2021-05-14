hostGameButton.addEventListener("click", function() {
    hostGameScreen.hidden = false;
    chatScreen.hidden = false;
    
    joinGameButton.hidden = true;
    hostGameButton.hidden = true;
});

peer.on("open", function(id) {
    localPeerIdElement.textContent = "Room ID: " + id;
});

peer.on("connection", function(connection) {
    conn = connection;

    updatePlayerList(connection.peer);
    
    initializeConnectionEvents();
});

function initializeConnectionEvents() {
    conn.on("data", function(data) {
        updateChat(data);
    })
    
    conn.on("close", function() {
        for(var i = 0; i < players.length; i++) {
            if(players[i] == playerId) {
                players.splice(i, 1);
            }
        }
        updatePlayerList();
    })
}

function updatePlayerList(playerId) {
    players.push(playerId);
    playerListElement.innerHTML = "";
    
    for(var i = 0; i < players.length; i++) {
        var playerListItem = document.createElement("li");
        playerListItem.textContent = "Player: " + players[i];

        playerListElement.appendChild(playerListItem);
    }
}