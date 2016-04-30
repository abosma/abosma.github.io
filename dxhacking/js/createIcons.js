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
        hackingControls.setAttribute("style", "position:absolute;");
        hackingControls.setAttribute("src", "images/hackingControls.png");
        hackingControls.setAttribute("id", "hackingControls");
        document.body.appendChild(hackingControls);
        hackingControls.style.top = y + 'px';
        hackingControls.style.left = (x + 20) + 'px';
    } else {
        document.getElementById("hackingControls").style.top = y + 'px';
        document.getElementById("hackingControls").style.left = (x + 20) + 'px';
    }
}

function removeControls() {
    $("#hackingControls").remove();
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