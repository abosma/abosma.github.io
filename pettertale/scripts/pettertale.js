var AP = 0;
var health = 20;
var hpbarwidth = 2.6;
var currentmenu = 0;
var dogDistance = 57;

var player = document.getElementById("pFight");
var enemy = document.getElementById("dFight");


document.getElementById("currenthp").innerHTML = health;
document.getElementById("hpbar1").style.width = hpbarwidth + "%";

document.getElementById("actbutton").onclick = function() {pressActButton()};
document.getElementById("actbutton").onmouseover = function() {mouseOverAct()};
document.getElementById("actbutton").onmouseout = function() {mouseOutAct()};
document.getElementById("fightbutton").onmouseout = function() {mouseOutFight()};
document.getElementById("fightbutton").onmouseover = function() {mouseOverFight()};
document.getElementById("mercybutton").onmouseout = function() {mouseOutMercy()};
document.getElementById("mercybutton").onmouseover = function() {mouseOverMercy()};
document.getElementById("itembutton").onmouseout = function() {mouseOutItem()};
document.getElementById("itembutton").onmouseover = function() {mouseOverItem()};
document.getElementById("menu1").onclick = function() {pressMenu1()};
document.getElementById("menu1").onmouseover = function() {mouseOverMenu1()};
document.getElementById("menu1").onmouseout = function() {mouseOutMenu1()};
document.getElementById("menu2").onclick = function() {startFight()};
document.getElementById("menu2").onmouseover = function() {mouseOverMenu2()};
document.getElementById("menu2").onmouseout = function() {mouseOutMenu2()};

function mouseOverMenu1() {
	document.getElementById("menu1").style.content="url(pics/menu1over.png)";
	document.getElementById("menu1").style.left="11.3%"
}
function mouseOutMenu1() {
	document.getElementById("menu1").style.content="url(pics/menu1.png)";
	document.getElementById("menu1").style.left="15.5%"
}
function mouseOverMenu2() {
	document.getElementById("menu2").style.content="url(pics/menu2over.png)";
	document.getElementById("menu2").style.left="11.3%"
}
function mouseOutMenu2() {
	document.getElementById("menu2").style.content="url(pics/menu2.png)";
	document.getElementById("menu2").style.left="15.5%"
}

function mouseOverAct() {
	document.getElementById("actbutton").style.content="url(pics/actbuttondown.png)";
}
function mouseOutAct() {
	document.getElementById("actbutton").style.content="url(pics/actbutton.png)";
}
function mouseOverFight() {
	document.getElementById("fightbutton").style.content="url(pics/outoforderbutton.png)";
}
function mouseOutFight() {
	document.getElementById("fightbutton").style.content="url(pics/fightbutton.png)";
}
function mouseOverMercy() {
	document.getElementById("mercybutton").style.content="url(pics/outoforderbutton.png)";
}
function mouseOutMercy() {
	document.getElementById("mercybutton").style.content="url(pics/mercybutton.png)";
}
function mouseOverItem() {
	document.getElementById("itembutton").style.content="url(pics/outoforderbutton.png)";
}
function mouseOutItem() {
	document.getElementById("itembutton").style.content="url(pics/itembutton.png)";
}

function pressActButton(){
	
	if(currentmenu == 0){
	currentmenu++;
	document.getElementById("battleText").style.display = "none";
	document.getElementById("btext1").style.display = "none";
	document.getElementById("menu1").style.display="block";
	}
	
}

function pressMenu1(){
	
	if(currentmenu == 1){
	currentmenu++;
	document.getElementById("menu1").style.display="none";
	document.getElementById("menu2").style.display="block";
	}
}

function startFight(){
	currentmenu == 0;
	document.getElementById("menu2").style.display="none";
	document.getElementById("textBox").style.content="pics/fightbox.png";
	document.getElementById("textBox").style.width="30%";
	document.getElementById("textBox").style.left = "34.45%";
	enemy.style.left = "69.7%";
	enemy.style.top = "57%";
	enemy.style.display="block";
	player.style.display="block";
}


var getHit = setInterval(getHit, 999999);

function getHit(){
	
	hpbarwidth -= 0.13;
	health -= 1;
	document.getElementById("currenthp").innerHTML = health;
	document.getElementById("hpbar1").style.width= hpbarwidth + "%";
}


var checkDeath = setInterval(checkDeath, 500);

function checkDeath(){
	if(health <= 0){
	document.getElementById("currenthp").style.display="none";
	document.getElementById("maxhp").style.display="none";
	document.getElementById("smallhptext").style.display="none";
	document.getElementById("playername").style.display="none";
	document.getElementById("level").style.display="none";
	document.getElementById("greenGrid").style.display="none";
	document.getElementById("hpbar1").style.display="none";
	document.getElementById("hpbar2").style.display="none";
	document.getElementById("textBox").style.display="none";
	document.getElementById("dog").style.display="none";
	document.getElementById("dogh").style.display="none";
	document.getElementById("actbutton").style.display="none";
	document.getElementById("fightbutton").style.display="none";
	document.getElementById("mercybutton").style.display="none";
	document.getElementById("itembutton").style.display="none";
	document.getElementById("battleText").style.display = "none";
	document.getElementById("btext1").style.display="none";
	document.getElementById("deathgif").style.display="block";
	document.getElementById("theme").src="sounds/dogsong.mp3"
	window.clearInterval(checkDeath);
	window.clearInterval(getHit);
	}
}

function growDog(){
	
	AP++
	console.log(AP);
	console.log(document.getElementById("dogh").style.content);
	
	if(AP == 1){
	document.getElementById("dogh").style.content="url(pics/dogh1.png)";
	document.getElementById("dogh").style.width="5.2%"
	document.getElementById("dogh").style.height="16.5%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="9.2%"
	}
	if(AP == 2){
	document.getElementById("dogh").style.content="url(pics/dogh2.png)";
	document.getElementById("dogh").style.width="5.2%"
	document.getElementById("dogh").style.height="19.7%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="5.9%"
	}
	if(AP == 3){
	document.getElementById("dogh").style.content="url(pics/dogh3.png)";
	document.getElementById("dogh").style.width="5.2%"
	document.getElementById("dogh").style.height="22.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="3%"
	}
	if(AP == 4){
	document.getElementById("dogh").style.content="url(pics/dogh4.png)";
	document.getElementById("dogh").style.width="5.2%"
	document.getElementById("dogh").style.height="25.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="0%"
	}
	if(AP == 5){
	document.getElementById("dogh").style.content="url(pics/dogh5.png)";
	document.getElementById("dogh").style.width="5.2%"
	document.getElementById("dogh").style.height="28.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="-3%"
	}
	if(AP == 6){
	document.getElementById("dogh").style.content="url(pics/dogh6.png)";
	document.getElementById("dogh").style.width="5.2%"
	document.getElementById("dogh").style.height="31.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="-6%"
	}
	if(AP == 7){
	document.getElementById("dogh").style.content="url(pics/dogh7.png)";
	document.getElementById("dogh").style.width="5.2%"
	document.getElementById("dogh").style.height="34.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="-9%"
	}
	if(AP == 8){
	document.getElementById("dogh").style.content="url(pics/dogh8.png)";
	document.getElementById("dogh").style.width="5.2%"
	document.getElementById("dogh").style.height="37.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="-12%"
	}
	if(AP == 14){
	document.getElementById("dogh").style.content="url(pics/dogh9.png)";
	document.getElementById("dogh").style.width="17.35%"
	document.getElementById("dogh").style.height="37.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="-12%"
	}
	if(AP == 15){
	document.getElementById("dogh").style.content="url(pics/dogh10.png)";
	document.getElementById("dogh").style.width="17.35%"
	document.getElementById("dogh").style.height="37.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="-12%"
	}
	if(AP == 16){
	document.getElementById("dogh").style.content="url(pics/dogh11.png)";
	document.getElementById("dogh").style.width="17.35%"
	document.getElementById("dogh").style.height="37.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="-12%"
	}
	if(AP == 17){
	document.getElementById("dogh").style.content="url(pics/dogh12.png)";
	document.getElementById("dogh").style.width="17.35%"
	document.getElementById("dogh").style.height="37.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="-12%"
	}
	if(AP == 18){
	document.getElementById("dogh").style.content="url(pics/dogh13.png)";
	document.getElementById("dogh").style.width="17.35%"
	document.getElementById("dogh").style.height="37.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="-12%"
	}
	if(AP == 19){
	document.getElementById("dogh").style.content="url(pics/dogh14.png)";
	document.getElementById("dogh").style.width="17.35%"
	document.getElementById("dogh").style.height="37.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="-12%"
	}
	if(AP == 20){
	document.getElementById("dogh").style.content="url(pics/dogh15.png)";
	document.getElementById("dogh").style.width="17.35%"
	document.getElementById("dogh").style.height="37.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="-12%"
	}
	if(AP == 21){
	document.getElementById("dogh").style.content="url(pics/dogh16.png)";
	document.getElementById("dogh").style.width="17.35%"
	document.getElementById("dogh").style.height="37.6%"
	document.getElementById("dogh").style.left="41.75%"
	document.getElementById("dogh").style.top="-12%"
	}
}