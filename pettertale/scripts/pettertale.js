var AP = 0;
var health = 20;
var hpbarwidth = 2.6;
var currentmenu = 0;

document.getElementById("currenthp").innerHTML = health;

document.getElementById("menu1").style.display="none";
document.getElementById("menu1").style.zIndex="3"
document.getElementById("menu1").style.top="57.05%"
document.getElementById("menu1").style.left="15.5%"
document.getElementById("menu1").style.position="absolute";
document.getElementById("menu1").style.content= "url(pics/menu1.png)"

document.getElementById("menu2").style.display="none";
document.getElementById("menu2").style.zIndex="3"
document.getElementById("menu2").style.top="57.05%"
document.getElementById("menu2").style.left="15.5%"
document.getElementById("menu2").style.position="absolute";
document.getElementById("menu2").style.content= "url(pics/menu2.png)"

document.getElementById("dogh").style.position="absolute";
document.getElementById("dogh").style.width="5.2%"
document.getElementById("dogh").style.height="12%"
document.getElementById("dogh").style.left="41.7%"
document.getElementById("dogh").style.top="13.7%"
document.getElementById("dogh").style.zIndex="2"
document.getElementById("dogh").style.content= "url(pics/dogh.png)"

document.getElementById("dog").style.position="absolute";
document.getElementById("dog").style.width="14%"
document.getElementById("dog").style.height="48%"
document.getElementById("dog").style.left="35.7%"
document.getElementById("dog").style.top="3%"
document.getElementById("dog").style.zIndex="2"
document.getElementById("dog").style.content= "url(pics/dog.png)"

document.getElementById("greenGrid").style.width="85%";
document.getElementById("greenGrid").style.height="50%";
document.getElementById("greenGrid").style.position="absolute";
document.getElementById("greenGrid").style.left="7%"
document.getElementById("greenGrid").style.zIndex="0"
document.getElementById("greenGrid").style.content= "url(pics/battlebackground.png)"

document.getElementById("textBox").style.width="79%";
document.getElementById("textBox").style.height="28%";
document.getElementById("textBox").style.position="absolute";
document.getElementById("textBox").style.left="10%"
document.getElementById("textBox").style.top="52%"
document.getElementById("textBox").style.zIndex="1"
document.getElementById("textBox").style.content= "url(pics/textbox.png)"

document.getElementById("fightbutton").style.width="14.5%";
document.getElementById("fightbutton").style.height="10%";
document.getElementById("fightbutton").style.position="absolute";
document.getElementById("fightbutton").style.left="10%"
document.getElementById("fightbutton").style.top="90%"
document.getElementById("fightbutton").style.zIndex="1"
document.getElementById("fightbutton").style.content= "url(pics/fightbutton.png)"

document.getElementById("hpbar1").style.width= hpbarwidth + "%";
document.getElementById("hpbar1").style.height="4%";
document.getElementById("hpbar1").style.position="absolute";
document.getElementById("hpbar1").style.left="45.5%"
document.getElementById("hpbar1").style.top="82.8%"
document.getElementById("hpbar1").style.zIndex="2"
document.getElementById("hpbar1").style.content= "url(pics/hpbar1.png)"

document.getElementById("hpbar2").style.width="2.6%";
document.getElementById("hpbar2").style.height="4%";
document.getElementById("hpbar2").style.position="absolute";
document.getElementById("hpbar2").style.left="45.5%"
document.getElementById("hpbar2").style.top="82.8%"
document.getElementById("hpbar2").style.zIndex="1"
document.getElementById("hpbar2").style.content= "url(pics/hpbar2.png)"

document.getElementById("actbutton").style.width="14.5%";
document.getElementById("actbutton").style.height="10%";
document.getElementById("actbutton").style.position="absolute";
document.getElementById("actbutton").style.left="31.5%"
document.getElementById("actbutton").style.top="90%"
document.getElementById("actbutton").style.zIndex="1"
document.getElementById("actbutton").style.content= "url(pics/actbutton.png)"

document.getElementById("itembutton").style.width="14.5%";
document.getElementById("itembutton").style.height="10%";
document.getElementById("itembutton").style.position="absolute";
document.getElementById("itembutton").style.left="53%"
document.getElementById("itembutton").style.top="90%"
document.getElementById("itembutton").style.zIndex="1"
document.getElementById("itembutton").style.content= "url(pics/itembutton.png)"

document.getElementById("mercybutton").style.width="14.5%";
document.getElementById("mercybutton").style.height="10%";
document.getElementById("mercybutton").style.position="absolute";
document.getElementById("mercybutton").style.left="74.5%"
document.getElementById("mercybutton").style.top="90%"
document.getElementById("mercybutton").style.zIndex="1"
document.getElementById("mercybutton").style.content= "url(pics/mercybutton.png)"

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
document.getElementById("menu2").onclick = function() {growDog()};
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

function getHit(){
	
	hpbarwidth -= 0.13;
	health -= 1;
	document.getElementById("currenthp").innerHTML = health;
	document.getElementById("hpbar1").style.width= hpbarwidth + "%";
}

function growDog(){
	
	AP++
	console.log(AP);
	console.log(document.getElementById("dogh").style.content);
	
	if(health == 0){
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
	}
	
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