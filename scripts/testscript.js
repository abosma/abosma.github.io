var gold = 100
var goldGain = 5;
var text = "";
var i = setInterval(passiveGoldGain, 1000);
var j =setInterval(updateTexts, 500);

document.getElementById("demo").onclick = function() {upgradeGoldGain()};

function passiveGoldGain(){
  console.log(gold);
  console.log(goldGain)
  console.log(text);
  gold += goldGain
  text = "Gold: " + gold;
}

function upgradeGoldGain(){
  goldGain += 2;
}

function updateTexts(){
  document.getElementById("goldGainText").innerHTML = "+ " + goldGain;
  document.getElementById("goldText").innerHTML = text;
  document.getElementById("upgradeGoldGain").innerHTML = "Upgrade Gold Gain";
}
