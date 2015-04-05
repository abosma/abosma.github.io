var gold = 100;
var goldGain = 5;
var i;

document.getElementById("test").innerHTML = gold;

i = setInterval(goldGain, 1000);

function goldGain(){
  gold + goldGain;
}
