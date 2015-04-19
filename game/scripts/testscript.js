// Variables
var gold = 100;
var farms = 0;
var wood = 25;
var woodGain = 0;
var minersAmount = 0;
var minersFoodDecrease = (minersAmount * 1.5);
var minersFoodIncrease = (farms * 2);
var minersFoodDifference = minersFoodIncrease - minersFoodDecrease;
var food = 30;
var buildFarmWoodCost = 10 + Math.pow(2, farms);
var buildFarmGoldCost = 500 + Math.pow(1.2, farms);
var upgradeGoldGainCost = 200 + Math.pow(3, minersAmount);
var goldGain = 5 + Math.pow(2, minersAmount);

// Text Variables
var text = "";
var text2 = "";
var text3 = "";
var text4 = "";
var text5 = "";
var text6 = "";
var text7 = "";

// Interval Variables
var goldInterval = 1000;

// Text Positions, visibility and functions
document.getElementById("upgradeGoldGain").onclick = function() {upgradeGoldGain()};
document.getElementById("upgradeGoldGain").style.fontWeight = 900;
document.getElementById("upgradeGoldGain").style.position = "absolute";
document.getElementById("upgradeGoldGain").style.top = "140px";
document.getElementById("upgradeGoldGain").style.left = "80px";

document.getElementById("buildFarm").onclick = function() {buildFarmFunction()};
document.getElementById("buildFarm").style.fontWeight = 900;
document.getElementById("buildFarm").style.position = "absolute";
document.getElementById("buildFarm").style.top = "160px";
document.getElementById("buildFarm").style.left = "78px";

document.getElementById("farmsText").style.position = "absolute";
document.getElementById("farmsText").style.left = "10px";
document.getElementById("farmsText").style.top = "90px";

document.getElementById("minersFoodGain").style.position = "absolute";
document.getElementById("minersFoodGain").style.left = "150px";
document.getElementById("minersFoodGain").style.top = "29px";

document.getElementById("minersText").style.position = "absolute";
document.getElementById("minersText").style.left = "10px";
document.getElementById("minersText").style.top = "50px";

document.getElementById("woodText").style.position = "absolute";
document.getElementById("woodText").style.left = "10px";
document.getElementById("woodText").style.top = "70px";

document.getElementById("woodGainText").style.position = "absolute";
document.getElementById("woodGainText").style.left = "150px";
document.getElementById("woodGainText").style.top = "70px";

document.getElementById("upgradeGoldGainCostText").style.visibility = "hidden";
document.getElementById("upgradeGoldGainCostText").style.position = "absolute";
document.getElementById("upgradeGoldGainCostText").style.top = "140px";
document.getElementById("upgradeGoldGainCostText").style.left = "180px";

document.getElementById("buildFarmCostText").style.visibility = "hidden";
document.getElementById("buildFarmCostText").style.position = "absolute";
document.getElementById("buildFarmCostText").style.top = "160px";
document.getElementById("buildFarmCostText").style.left = "180px";

document.getElementById("foodText").style.position = "absolute";
document.getElementById("foodText").style.left = "10px";
document.getElementById("foodText").style.top = "29px";

document.getElementById("goldText").style.position = "absolute";
document.getElementById("goldText").style.left = "10px";

document.getElementById("goldGainText").style.position = "absolute";
document.getElementById("goldGainText").style.left = "150px";

document.getElementById("githubButton").style.width="50px";
document.getElementById("githubButton").style.height="50px";
document.getElementById("githubButton").style.bottom="10px";
document.getElementById("githubButton").style.right="10px";
document.getElementById("githubButton").style.position="fixed";
document.getElementById("githubButton").style.content= "url(images/gitbuttonUp.png)"
document.getElementById("githubButton").onclick = function(){githubButtonFunction()};


// Passive gold gain function
function passiveGoldGain(){
  console.log(text6);
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
  text5 = "Cost: " + upgradeGoldGainCost + " gold, 1.5 food per second";
}

function checkFarmCostUpgrades(){
  document.getElementById("buildFarm").onmouseover = function(){document.getElementById("buildFarmCostText").style.visibility = "visible";}  
  document.getElementById("buildFarm").onmouseout = function(){document.getElementById("buildFarmCostText").style.visibility = "hidden";}
  text6 = "Cost: " + buildFarmGoldCost + " gold, " + buildFarmWoodCost + " wood";
}

// Build farm button
function buildFarmFunction(){
  if(buildFarmWoodCost < wood && buildFarmGoldCost < gold){
    wood -= buildFarmWoodCost;
    gold -= buildFarmGoldCost;
    farms++;
  }else if(buildFarmWoodCost > wood){
    text6 = "You don't have enough wood."
  }else if(buildFarmGoldCost > gold){
    text6 = "You dont have enough gold."
  }
}

// Updates all texts and variables
function updateTexts(){
  text3 = "Miners: " + minersAmount;
  goldGain = 5 + Math.pow(2, minersAmount);
  upgradeGoldGainCost = 200 + Math.pow(3, minersAmount);
  buildFarmGoldCost = 500 + Math.pow(1.2, farms);
  buildFarmWoodCost = 10 + Math.pow(2, farms);
  minersFoodDecrease = (minersAmount * 1.5);
  minersFoodIncrease = (farms * 2);
  minersFoodDifference = minersFoodIncrease - minersFoodDecrease;
  document.getElementById("goldGainText").innerHTML = "+ " + goldGain;
  document.getElementById("goldText").innerHTML = text;
  document.getElementById("foodText").innerHTML = text2;
  document.getElementById("minersText").innerHTML = text3;
  document.getElementById("farmsText").innerHTML = "Farms: " + farms;
  document.getElementById("minersFoodGain").innerHTML = text4;
  document.getElementById("upgradeGoldGainCostText").innerHTML = text5;
  document.getElementById("buildFarmCostText").innerHTML = text6;
}

// githubbutton
function githubButtonFunction() {
  var win = window.open('https://github.com/AtillaBosma/atillabosma.github.io/', '_blank');
  if(win){
    win.focus();
  }else{
    alert('Please allow popups for this site');
  }
}

// All the intervals are set on 1s loops
var i = setInterval(passiveGoldGain, goldInterval);
var j = setInterval(updateTexts, 1000);
var k = setInterval(foodDecreaseFunction, 1000);
var l = setInterval(checkFoodDifference, 1000);
var m = setInterval(checkGoldCostUpgrades, 1000);
var n = setInterval(checkFarmCostUpgrades, 1000);
