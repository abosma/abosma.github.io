var gold = 100;
var goldGain = 5;
var text = "";
var i;

setInterval(function(){ gold += goldGain; }, 100);

text += "Gold: " + gold + "<br>";

document.getElementById("test").innerHTML = text;
