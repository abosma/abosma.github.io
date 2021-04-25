var localPeerIdElement = document.getElementById("localPeerId");

var remotePeerIdInputElement = document.getElementById("remotePeerId");
var connectButtonElement = document.getElementById("connectButton");
var playerListElement = document.getElementById("playerList");

var chatInputElement = document.getElementById("chatInput");
var chatSendButtonElement = document.getElementById("chatSendButton");
var chatElement = document.getElementById("chat");

var players = [];

var peer = new Peer();
var conn = null;

peer.on("open", function(id) {
    localPeerIdElement.textContent = "Local ID: " + id;
});

connectButtonElement.addEventListener("click", function() {
    var remotePeerId = remotePeerIdInputElement.value;
    
    if(remotePeerId) {
        let connection = peer.connect(remotePeerId);
        
        connection.on("open", function() {
            conn = connection;

            updatePlayerList(connection.peer);
            initializeConnectionEvents();
        });
    };
});

chatSendButtonElement.addEventListener("click", function() {
    var toSendMessage = chatInputElement.value;

    if(toSendMessage && conn.open) {
        conn.send(toSendMessage);
        updateChat(toSendMessage);
    } else if(!conn.open) {
        console.log("Connection closed");
    }
})

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

function updateChat(message) {
    var chatMessage = document.createElement("li");
    chatMessage.textContent = message;

    chatElement.appendChild(chatMessage);
}