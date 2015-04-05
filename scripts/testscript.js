var gold = 100
var goldGain = 5;
var text = "";
var i = setInterval(passiveGoldGain, 1000);

function passiveGoldGain(){
  console.log(gold);
  console.log(text);
  gold += goldGain
  text = "Gold: " + gold;
  document.getElementById("test").innerHTML = text;
}

function upgradeGoldGain(){
  goldGain += 2;
}
