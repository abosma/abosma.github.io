var localPeerIdElement = document.getElementById("localPeerId");
var remotePeerIdInputElement = document.getElementById("remotePeerId");
var connectButtonElement = document.getElementById("connectButton");

var peer = new Peer();
var conn = null;

peer.on("open", function(id) {
    localPeerIdElement.textContent = id;
});

connectButtonElement.addEventListener('click', function() {
    var remotePeerId = remotePeerIdInputElement.value;
    
    if(remotePeerId) {
        conn = peer.connect(remotePeerId);
        conn.send('hi!');
    }
});

peer.on('connection', function(conn) {
    conn.on('data', function(data) {
        console.log(data);
    })
});