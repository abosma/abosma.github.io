var gold = 100;
var goldGain = 5;
var i;

i = setInterval(goldGainFunction, 1000);

function goldGainFunction(){
  gold + goldGain;
  document.getElementById("test").innerHTML = gold;
}
