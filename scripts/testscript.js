var gold = 100
var goldGain = 5;
var text = "";
var goldGainSpeed = "3000";
var i = setInterval(passiveGoldGain, goldGainSpeed);
var j = setInterval(updateTexts, 500);

// Text Positions
document.getElementById("upgradeGoldGain").onclick = function() {upgradeGoldGain()};
document.getElementById("upgradeGoldGain").style.fontWeight = 900;
document.getElementById("upgradeGoldGain").style.position = "absolute";
document.getElementById("upgradeGoldGain").style.top = "50px";

document.getElementById("upgradeGoldGainSpeed").onclick = function() {upgradeGoldGainSpeed()};
document.getElementById("upgradeGoldGainSpeed").style.fontWeight = 900;
document.getElementById("upgradeGoldGainSpeed").style.position = "absolute";
document.getElementById("upgradeGoldGainSpeed").style.top = "80px";

document.getElementById("goldText").style.position = "absolute";
document.getElementById("goldText").style.left = "10px";

document.getElementById("goldGainText").style.position = "absolute";
document.getElementById("goldGainText").style.left = "100px";

function passiveGoldGain(){
  console.log(gold);
  console.log(goldGain);
  console.log(goldGainSpeed);
  gold += goldGain
  text = "Gold: " + gold;
}

function upgradeGoldGain(){
  goldGain += 2;
}

function upgradeGoldGainSpeed(){
  goldGainSpeed -= 200;
}

function updateTexts(){
  document.getElementById("goldGainText").innerHTML = "+ " + goldGain;
  document.getElementById("goldText").innerHTML = text;
  document.getElementById("upgradeGoldGain").innerHTML = "Upgrade Gold Gain";
  document.getElementById("upgradeGoldGainSpeed").innerHTML = "Upgrade Gold Gain Speed";
}
