// Intervals
var gold = 100;
var farms = 1;
var minersAmount = 1;
var minersFoodDecrease = (minersAmount * 1.5);
var minersFoodIncrease = (farms * 1);
var minersFoodDifference = minersFoodIncrease - minersFoodDecrease;
var food = 30;
var upgradeGoldGainCost = 200 + Math.pow(3, minersAmount);
var goldGain = 5 + Math.pow(2, minersAmount);
var text = "";
var text2 = "";
var text3 = "";
var text4 = "";
var text5 = "";

// Text Positions, visibility and functions BENNO
document.getElementById("upgradeGoldGain").onclick = function() {upgradeGoldGain()};
document.getElementById("upgradeGoldGain").style.fontWeight = 900;
document.getElementById("upgradeGoldGain").style.position = "absolute";
document.getElementById("upgradeGoldGain").style.top = "100px";
document.getElementById("upgradeGoldGain").style.left = "80px";

document.getElementById("buildFarm").onclick = function() {buildFarmFunction()};
document.getElementById("buildFarm").style.fontWeight = 900;
document.getElementById("buildFarm").style.position = "absolute";
document.getElementById("buildFarm").style.top = "120px";
document.getElementById("buildFarm").style.left = "78px";

document.getElementById("farmsText").style.position = "absolute";
document.getElementById("farmsText").style.left = "10px";
document.getElementById("farmsText").style.top = "70px";

document.getElementById("minersFoodGain").style.position = "absolute";
document.getElementById("minersFoodGain").style.left = "150px";
document.getElementById("minersFoodGain").style.top = "50px";

document.getElementById("minersText").style.position = "absolute";
document.getElementById("minersText").style.left = "10px";
document.getElementById("minersText").style.top = "29px";

document.getElementById("upgradeGoldGainCostText").style.visibility = "hidden";
document.getElementById("upgradeGoldGainCostText").style.position = "absolute";
document.getElementById("upgradeGoldGainCostText").style.top = "100px";
document.getElementById("upgradeGoldGainCostText").style.left = "180px";

document.getElementById("foodText").style.position = "absolute";
document.getElementById("foodText").style.left = "10px";
document.getElementById("foodText").style.top = "50px";

document.getElementById("goldText").style.position = "absolute";
document.getElementById("goldText").style.left = "10px";

document.getElementById("goldGainText").style.position = "absolute";
document.getElementById("goldGainText").style.left = "150px";


// Passive gold gain function
function passiveGoldGain(){
  console.log(gold);
  console.log(goldGain);
  console.log(minersAmount);
  console.log(upgradeGoldGainCost);
  console.log(minersFoodIncrease);
  console.log(minersFoodDecrease);
  console.log(minersFoodDifference);
  console.log(food);
  console.log(text2);
  gold += goldGain
  text = "Gold: " + gold;
}

// Passive food decrease, and check if minersAmount is below 0 function
function foodDecreaseFunction(){
  if(minersAmount >= 0){
    if(food >= 0){
      text2 = "Food: " + food;
      food += minersFoodDifference;
    }else if(food < 0){
      text2 = "A miner died..."
      food = 0;
      minersAmount -= 1;
    }
  }else if(minersAmount <= 0 || minersAmount == 0){
    minersAmount = 0;
  }
}

// Change text for minersFoodDifference
function checkFoodDifference(){
  if(minersFoodDifference < 0){
    text4 = minersFoodDifference;
  }else if(minersFoodDifference > 0){
    text4 = "+ " + minersFoodDifference
  }
}

// Hire miner button
function upgradeGoldGain(){
  if(gold - upgradeGoldGainCost < 0){
    text5 = "Not enough gold";
  }else if(gold - upgradeGoldGainCost >= 0){
    gold -= upgradeGoldGainCost;
    minersAmount += 1;
    text5 = "You hired a miner";
  }
}

// Mouseover for hire miner button
function checkGoldCostUpgrades(){
  document.getElementById("upgradeGoldGain").onmouseover = function(){document.getElementById("upgradeGoldGainCostText").style.visibility = "visible";}
  document.getElementById("upgradeGoldGain").onmouseout = function(){document.getElementById("upgradeGoldGainCostText").style.visibility = "hidden";}
  text5 = "Cost: " + upgradeGoldGainCost + " gold";
}

// Build farm button
function buildFarmFunction(){
  farms += 1;
}

// Updates all texts and variables
function updateTexts(){
  text3 = "Miners: " + minersAmount;
  goldGain = 5 + Math.pow(2, minersAmount);
  upgradeGoldGainCost = 200 + Math.pow(3, minersAmount);
  minersFoodDecrease = (minersAmount * 1.5);
  minersFoodIncrease = (farms * 1);
  minersFoodDifference = minersFoodIncrease - minersFoodDecrease;
  document.getElementById("goldGainText").innerHTML = "+ " + goldGain;
  document.getElementById("goldText").innerHTML = text;
  document.getElementById("foodText").innerHTML = text2;
  document.getElementById("minersText").innerHTML = text3;
  document.getElementById("farmsText").innerHTML = "Farms: " + farms;
  document.getElementById("minersFoodGain").innerHTML = text4;
  document.getElementById("upgradeGoldGainCostText").innerHTML = text5;
}

// All the intervals are set on 1s loops
var i = setInterval(passiveGoldGain, 1000);
var j = setInterval(updateTexts, 1000);
var k = setInterval(foodDecreaseFunction, 1000);
var l = setInterval(checkFoodDifference, 1000);
var m = setInterval(checkGoldCostUpgrades, 1000);
