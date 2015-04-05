var goldGain = 5;
var gold = setInterval(function(){ 100 += goldGain; }, 1000);;
var text = "";

text += "Gold: " + gold + "<br>";

document.getElementById("test").innerHTML = text;
