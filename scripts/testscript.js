var gold = 100;
var minersAmount = 0;
var food = 30;
var minersFoodDecrease = 1.5 * minersAmount;
var upgradeGoldGainCost = 200 + Math.pow(3, minersAmount);
var goldGain = 5 + Math.pow(2, minersAmount);
var text = "";
var text2 = "";
var i = setInterval(passiveGoldGain, 1000);
var j = setInterval(updateTexts, 1000);
var k = setInterval(minersFoodDecrease, 1000);

// Text Positions
document.getElementById("upgradeGoldGain").onclick = function() {upgradeGoldGain()};
document.getElementById("upgradeGoldGain").style.fontWeight = 900;
document.getElementById("upgradeGoldGain").style.position = "absolute";
document.getElementById("upgradeGoldGain").style.top = "80px";
document.getElementById("upgradeGoldGain").style.left = "80px";

document.getElementById("upgradeGoldGainCostText").style.visibility = "hidden";

document.getElementById("foodText").style.position = "absolute";
document.getElementById("foodText").style.left = "10px";
document.getElementById("foodText").style.top = "50px";

document.getElementById("goldText").style.position = "absolute";
document.getElementById("goldText").style.left = "10px";

document.getElementById("goldGainText").style.position = "absolute";
document.getElementById("goldGainText").style.left = "150px";

function passiveGoldGain(){
  console.log(gold);
  console.log(goldGain);
  console.log(minersAmount);
  console.log(upgradeGoldGainCost);
  console.log(food);
  gold += goldGain
  text = "Gold: " + gold;
}

function minersFoodDecrase(){
  food -= minersFoodDecrease;
  text2 = "Food: " + food;
}

function upgradeGoldGain(){
  if(gold - upgradeGoldGainCost < 0){
    alert("Not enough gold");
  }else if(gold - upgradeGoldGainCost >= 0){
    gold -= upgradeGoldGainCost;
    minersAmount += 1;
  }
}


function updateTexts(){
  goldGain = 5 + Math.pow(2, minersAmount);
  upgradeGoldGainCost = 200 + Math.pow(3, minersAmount);
  minersFoodDecrease = 1.5 * minersAmount;
  document.getElementById("goldGainText").innerHTML = "+ " + goldGain;
  document.getElementById("goldText").innerHTML = text;
  document.getElementById("foodText").innerHTML = text2;
}
