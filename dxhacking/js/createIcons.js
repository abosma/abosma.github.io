function getRandomPosition(element) {
    var x = $(window).width();
    var y = $(window).height();
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

function showControls() {
    var x = event.clientX;
    var y = event.clientY;
    if (!document.getElementById("hackingControls")) {
        var hackingControls = document.createElement('IMG');
        var hackingBtnCapture = document.createElement("INPUT");
        var hackingBtnDefend = document.createElement("INPUT");
        var hackingBtnNuke = document.createElement("INPUT");
        var hackingBtnStop = document.createElement("INPUT");

        hackingControls.setAttribute("style", "position:absolute;");
        hackingControls.setAttribute("src", "images/hackingControls.png");
        hackingControls.setAttribute("id", "hackingControls");

        hackingBtnCapture.setAttribute("type", "image");
        hackingBtnCapture.setAttribute("src", "images/hackingBtnCapture.png");
        hackingBtnCapture.setAttribute("style", "position:absolute;");
        hackingBtnCapture.setAttribute("id", "hackingBtnCapture");
        hackingBtnCapture.setAttribute("onmouseover", "hackingBtnCapture");

        hackingBtnDefend.setAttribute("type", "image");
        hackingBtnDefend.setAttribute("src", "images/hackingBtnDefend.png");
        hackingBtnDefend.setAttribute("style", "position:absolute;");
        hackingBtnDefend.setAttribute("id", "hackingBtnDefend");
        hackingBtnDefend.setAttribute("onmouseover", "hackingBtnCapture");

        hackingBtnNuke.setAttribute("type", "image");
        hackingBtnNuke.setAttribute("src", "images/hackingBtnNuke.png");
        hackingBtnNuke.setAttribute("style", "position:absolute;");
        hackingBtnNuke.setAttribute("id", "hackingBtnNuke");
        hackingBtnNuke.setAttribute("onmouseover", "hackingBtnCapture");

        hackingBtnStop.setAttribute("type", "image");
        hackingBtnStop.setAttribute("src", "images/hackingBtnStop.png");
        hackingBtnStop.setAttribute("style", "position:absolute;");
        hackingBtnStop.setAttribute("id", "hackingBtnStop");
        hackingBtnStop.setAttribute("onmouseover", "hackingBtnCapture");

        document.body.appendChild(hackingBtnCapture);
        document.body.appendChild(hackingBtnDefend);
        document.body.appendChild(hackingBtnNuke);
        document.body.appendChild(hackingBtnStop);

        document.body.appendChild(hackingControls);

        hackingControls.style.top = (y - 80) + 'px';
        hackingControls.style.left = (x + 40) + 'px';

        hackingBtnCapture.style.top = (y - 80) + 'px';
        hackingBtnCapture.style.left = (x + 40) + 'px';

        hackingBtnDefend.style.top = (y - 80) + 'px';
        hackingBtnDefend.style.left = (x + 40) + 'px';

        hackingBtnNuke.style.top = (y - 80) + 'px';
        hackingBtnNuke.style.left = (x + 40) + 'px';

        hackingBtnStop.style.top = (y - 80) + 'px';
        hackingBtnStop.style.left = (x + 40) + 'px';

    } else {
        document.getElementById("hackingControls").style.top = (y - 80) + 'px';
        document.getElementById("hackingControls").style.left = (x + 20) + 'px';

        document.getElementById("hackingBtnCapture").style.top = (y - 80) + 'px';
        document.getElementById("hackingBtnCapture").style.left = (x + 20) + 'px';

        document.getElementById("hackingBtnDefend").style.top = (y - 80) + 'px';
        document.getElementById("hackingBtnDefend").style.left = (x + 20) + 'px';

        document.getElementById("hackingBtnNuke").style.top = (y - 80) + 'px';
        document.getElementById("hackingBtnNuke").style.left = (x + 20) + 'px';

        document.getElementById("hackingBtnStop").style.top = (y - 80) + 'px';
        document.getElementById("hackingBtnStop").style.left = (x + 20) + 'px';
    }
}

function removeControls() {
    $("#hackingControls").remove();
    $("#hackingBtnCapture").remove();
    $("#hackingBtnDefend").remove();
    $("#hackingBtnNuke").remove();
    $("#hackingBtnStop").remove();
}


window.onload = function () {
    var allyNode = document.createElement('IMG');
    allyNode.setAttribute("style", "position:absolute;");
    allyNode.setAttribute("src", "images/allyNode2.png");
    allyNode.setAttribute("id", "allyNode");
    allyNode.setAttribute("onclick", "showControls();");
    document.body.appendChild(allyNode);
    var xy = getRandomPosition(allyNode);
    allyNode.style.top = xy[1] + 'px';
    allyNode.style.left = xy[0] + 'px';

    var enemyNode = document.createElement('IMG');
    enemyNode.setAttribute("style", "position:absolute;");
    enemyNode.setAttribute("src", "images/enemyNode2.png");
    enemyNode.setAttribute("id", "enemyNode");
    enemyNode.setAttribute("onclick", "showControls();");
    document.body.appendChild(enemyNode);
    var xy = getRandomPosition(enemyNode);
    enemyNode.style.top = xy[1] + 'px';
    enemyNode.style.left = xy[0] + 'px';

    for (var i = 0; i < 6 ; i++) {
        var file = [];
        file[i] = document.createElement('IMG');
        file[i].setAttribute("style", "position:absolute;");
        file[i].setAttribute("src", "images/fileUncap1.png");
        file[i].setAttribute("id", "file" + i);
        file[i].setAttribute("onclick", "showControls();");
        document.body.appendChild(file[i]);
        var xy = getRandomPosition(file[i]);
        file[i].style.top = xy[1] + 'px';
        file[i].style.left = xy[0] + 'px';
    }

    var canvas = document.createElement('canvas');
    canvas.setAttribute("id", "lineCanvas");
    canvas.setAttribute("width", $(window).width());
    canvas.setAttribute("height", $(window).height());
    canvas.setAttribute("onclick", "removeControls();");
    document.body.appendChild(canvas);
}