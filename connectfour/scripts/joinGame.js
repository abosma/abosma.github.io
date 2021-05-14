joinGameButton.addEventListener("click", function() {
    joinGameScreen.hidden = false;
    chatScreen.hidden = false;

    joinGameButton.hidden = true;
    hostGameButton.hidden = true;
});

connectButtonElement.addEventListener("click", function() {
    var remotePeerId = remotePeerIdInputElement.value;
    
    if(remotePeerId) {
        let connection = peer.connect(remotePeerId);
        
        connection.on("open", function() {
            conn = connection;

            initializeConnectionEvents();
        });
    };
});