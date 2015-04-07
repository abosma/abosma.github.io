var gold = 100;
var minersAmount = 2;
var upgradeGoldGainCost = 200 + Math.pow(3, minersAmount);
var goldGain = 5 + Math.pow(2, minersAmount);
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
document.getElementById("goldGainText").style.left = "150px";

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
  if(gold - upgradeGoldGainCost < 0){
    alert("Not enough gold");
  }else if(gold - upgradeGoldGainCost >= 0){
    gold -= upgradeGoldGainCost;
  }
}


function updateTexts(){
  goldGain = 5 + Math.pow(2, minersAmount);
  upgradeGoldGainCost = 200 + Math.pow(3, minersAmount);
  document.getElementById("goldGainText").innerHTML = "+ " + goldGain;
  document.getElementById("goldText").innerHTML = text;
}
