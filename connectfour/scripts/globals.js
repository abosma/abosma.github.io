var hostGameScreen = document.getElementById("hostGameScreen");
var joinGameScreen = document.getElementById("joinGameScreen");
var chatScreen = document.getElementById("chatScreen");

var localPeerIdElement = document.getElementById("localPeerId");

var remotePeerIdInputElement = document.getElementById("remotePeerId");
var connectButtonElement = document.getElementById("connectButton");
var playerListElement = document.getElementById("playerList");

var chatInputElement = document.getElementById("chatInput");
var chatSendButtonElement = document.getElementById("chatSendButton");
var chatElement = document.getElementById("chat");

var hostGameButton = document.getElementById("hostGame");
var joinGameButton = document.getElementById("joinGame");

var peer = new Peer();
var conn = null;

var players = [];