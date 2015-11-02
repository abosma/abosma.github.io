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
document.getElementById("textBox").style.height="32%";
document.getElementById("textBox").style.position="absolute";
document.getElementById("textBox").style.left="10%"
document.getElementById("textBox").style.top="52%"
document.getElementById("textBox").style.zIndex="1"
document.getElementById("textBox").style.content= "url(pics/textbox.png)"

document.getElementById("petbutton").style.width="20";
document.getElementById("petbutton").style.height="12%";
document.getElementById("petbutton").style.position="absolute";
document.getElementById("petbutton").style.left="41%"
document.getElementById("petbutton").style.top="86%"
document.getElementById("petbutton").style.zIndex="1"
document.getElementById("petbutton").style.content= "url(pics/petbutton.png)"

document.getElementById("petbutton").onclick = function() {pressbutton()};
document.getElementById("petbutton").onmouseover = function() {mouseOver()};
document.getElementById("petbutton").onmouseout = function() {mouseOut()};

function mouseOver() {
	document.getElementById("petbutton").style.content="url(pics/petbuttonover.png)";
}

function mouseOut() {
	document.getElementById("petbutton").style.content="url(pics/petbutton.png)";
}

var AP = 0;
function pressbutton(){
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
}