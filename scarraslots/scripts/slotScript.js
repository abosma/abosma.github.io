var slot1;
var slot2;
var slot3;
var score = 0;

function useMachine() {
    slot1 = Math.floor(Math.random() * 10);
    slot2 = Math.floor(Math.random() * 10);
    slot3 = Math.floor(Math.random() * 10);

    checkIfsame();
    changeIcons();
}

function checkIfsame() {
    if (slot1 == slot2 && slot2 == slot3) {
        document.getElementById("resultText").textContent = "You won 100 Scarra points!"
        score += 100;
        document.getElementById("score").textContent = "You have: " + score + " Scarra points!"
        return true;
    } else {
        document.getElementById("resultText").textContent = "You lost :("
        document.getElementById("score").textContent = "You have: " + score + " Scarra points!"
        return false;
    }
}

function changeIcons() {
    switch (slot1) {
        case 0:
            document.getElementById("image1").style.content = "url(images/s1.png)";
            break;
        case 1:
            document.getElementById("image1").style.content = "url(images/s2.png)";
            break;
        case 2:
            document.getElementById("image1").style.content = "url(images/s3.png)";
            break;
        case 3:
            document.getElementById("image1").style.content = "url(images/s4.png)";
            break;
        case 4:
            document.getElementById("image1").style.content = "url(images/s5.png)";
            break;
        case 5:
            document.getElementById("image1").style.content = "url(images/s6.png)";
            break;
        case 6:
            document.getElementById("image1").style.content = "url(images/s7.png)";
            break;
        case 7:
            document.getElementById("image1").style.content = "url(images/s8.png)";
            break;
        case 8:
            document.getElementById("image1").style.content = "url(images/s9.png)";
            break;
        case 9:
            document.getElementById("image1").style.content = "url(images/s10.png)";
    }

    switch (slot2) {
        case 0:
            document.getElementById("image2").style.content = "url(images/s1.png)";
            break;
        case 1:
            document.getElementById("image2").style.content = "url(images/s2.png)";
            break;
        case 2:
            document.getElementById("image2").style.content = "url(images/s3.png)";
            break;
        case 3:
            document.getElementById("image2").style.content = "url(images/s4.png)";
            break;
        case 4:
            document.getElementById("image2").style.content = "url(images/s5.png)";
            break;
        case 5:
            document.getElementById("image2").style.content = "url(images/s6.png)";
            break;
        case 6:
            document.getElementById("image2").style.content = "url(images/s7.png)";
            break;
        case 7:
            document.getElementById("image2").style.content = "url(images/s8.png)";
            break;
        case 8:
            document.getElementById("image2").style.content = "url(images/s9.png)";
            break;
        case 9:
            document.getElementById("image2").style.content = "url(images/s10.png)";
    }

    switch (slot3) {
        case 0:
            document.getElementById("image3").style.content = "url(images/s1.png)";
            break;
        case 1:
            document.getElementById("image3").style.content = "url(images/s2.png)";
            break;
        case 2:
            document.getElementById("image3").style.content = "url(images/s3.png)";
            break;
        case 3:
            document.getElementById("image3").style.content = "url(images/s4.png)";
            break;
        case 4:
            document.getElementById("image3").style.content = "url(images/s5.png)";
            break;
        case 5:
            document.getElementById("image3").style.content = "url(images/s6.png)";
            break;
        case 6:
            document.getElementById("image3").style.content = "url(images/s7.png)";
            break;
        case 7:
            document.getElementById("image3").style.content = "url(images/s8.png)";
            break;
        case 8:
            document.getElementById("image3").style.content = "url(images/s9.png)";
            break;
        case 9:
            document.getElementById("image3").style.content = "url(images/s10.png)";
    }
}

useMachine();

console.log("You got these slots: " + slot1 + slot2 + slot3);