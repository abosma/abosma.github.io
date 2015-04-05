var gold = 100
var goldGain = 5;
var text = "";
var i = setInterval(passiveGoldGain, 1000);

function passiveGoldGain(){
  console.log(gold);
  gold += goldGain
}

text += "Gold: " + gold + "<br>";

document.getElementById("test").innerHTML = text;
