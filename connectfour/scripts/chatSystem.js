chatSendButtonElement.addEventListener("click", function() {
    var toSendMessage = chatInputElement.value;

    if(toSendMessage && conn.open) {
        conn.send(toSendMessage);
        updateChat(toSendMessage);
    } else if(!conn.open) {
        console.log("Connection closed");
    }
})

function updateChat(message) {
    var chatMessage = document.createElement("li");
    chatMessage.textContent = message;

    chatElement.appendChild(chatMessage);
}