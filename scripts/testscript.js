var gold = 100;
var minersAmount = 2;
var upgradeGoldGainCost = 200;
var goldGain = Math.pow(5, minersAmount);
var text = "";
var i = setInterval(passiveGoldGain, 1000);
var j = setInterval(updateTexts, 1000);

// Text Positions
document.getElementById("upgradeGoldGain").onclick = function() {upgradeGoldGain()};
document.getElementById("upgradeGoldGain").style.fontWeight = 900;
document.getElementById("upgradeGoldGain").style.position = "absolute";
document.getElementById("upgradeGoldGain").style.top = "50px";

document.getElementById("goldText").style.position = "absolute";
document.getElementById("goldText").style.left = "10px";

document.getElementById("goldGainText").style.position = "absolute";
document.getElementById("goldGainText").style.left = "100px";

function passiveGoldGain(){
  console.log(gold);
  console.log(goldGain);
  console.log(minersAmount);
  console.log(upgradeGoldGainCost);
  gold += goldGain
  text = "Gold: " + gold;
}

function upgradeGoldGain(){
  minersAmount += 1;
}


function updateTexts(){
  goldGain = Math.pow(5, minersAmount);
  document.getElementById("goldGainText").innerHTML = "+ " + goldGain;
  document.getElementById("goldText").innerHTML = text;
}
