var gold = 100;
var goldGain = 5;
var text = "";
var i;

for (i = 0; i < 5; i++) {
    text += "Gold: " + gold + "<br>";
}

document.getElementById("test").innerHTML = text;