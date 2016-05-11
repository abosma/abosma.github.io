var currentFile;

function getRandomPosition(element) {
    var x = $(window).width();
    var y = $(window).height();
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

function lineRotationFile(file1,file2,line) {
    var img1 = $('#file' + file1);
    var img2 = $('#file' + file2);
    var line1 = $('#line' + line);
    var offset1 = img1.offset();
    var offset2 = img2.offset();
    var offset3 = line1.offset();

    var centerImg1_x = (offset1.left) + (img1.width()/2);
    var centerImg1_y = (offset1.top) + (img1.height() / 2);

    var centerImg2_x = (offset2.left) + (img2.width() / 2);
    var centerImg2_y = (offset2.top) + (img2.height() / 2);

    var centerLine1_x = (offset3.left) + (line1.width() / 2);
    var centerLine1_y = (offset3.top) + (line1.height() / 2);

    var radians = Math.atan2(centerImg1_x - centerLine1_x, centerImg1_y - centerLine1_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;

    line1.css('-moz-transform', 'rotate(' + degree + 'deg)');
    line1.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    line1.css('-o-transform', 'rotate(' + degree + 'deg)');
    line1.css('-ms-transform', 'rotate(' + degree + 'deg)');

    return [centerImg2_x,centerImg2_y];

}

function lineRotationNodes(node1, line) {
    var node1 = $('#' + node1);
    var line1 = $('#line' + line);
    var offset1 = node1.offset();
    var offset2 = line1.offset();

    var centerNode1_x = (offset1.left) + (node1.width() / 2);
    var centerNode1_y = (offset1.top) + (node1.height() / 2);

    var centerLine1_x = (offset2.left) + (line1.width() / 2);
    var centerLine1_y = (offset2.top) + (line1.height() / 2);

    var radians = Math.atan2(centerNode1_x - centerLine1_x, centerNode1_y - centerLine1_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;

    line1.css('-moz-transform', 'rotate(' + degree + 'deg)');
    line1.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    line1.css('-o-transform', 'rotate(' + degree + 'deg)');
    line1.css('-ms-transform', 'rotate(' + degree + 'deg)');

    return [centerNode1_x, centerNode1_y];

}

function changeIconCapture0() {
    document.getElementById("hackingBtnCapture").setAttribute("src", "images/hackingBtnCaptureOver.png");
}

function changeIconCapture1() {
    document.getElementById("hackingBtnCapture").setAttribute("src", "images/hackingBtnCapture.png");
}

function changeIconDefend0() {
    document.getElementById("hackingBtnDefend").setAttribute("src", "images/hackingBtnDefendOver.png");
}

function changeIconDefend1() {
    document.getElementById("hackingBtnDefend").setAttribute("src", "images/hackingBtnDefend.png");
}

function changeIconNuke0() {
    document.getElementById("hackingBtnNuke").setAttribute("src", "images/hackingBtnNukeOver.png");
}

function changeIconNuke1() {
    document.getElementById("hackingBtnNuke").setAttribute("src", "images/hackingBtnNuke.png");
}

function changeIconStop0() {
    document.getElementById("hackingBtnStop").setAttribute("src", "images/hackingBtnStopOver.png");
}

function changeIconStop1() {
    document.getElementById("hackingBtnStop").setAttribute("src", "images/hackingBtnStop.png");
}

function showControls() {
    console.log(currentFile);
    var x = event.clientX;
    var y = event.clientY;
    if (!document.getElementById("hackingControls")) {
        var hackingControls = document.createElement('IMG');
        var hackingBtnCapture = document.createElement("INPUT");
        var hackingBtnDefend = document.createElement("INPUT");
        var hackingBtnNuke = document.createElement("INPUT");
        var hackingBtnStop = document.createElement("INPUT");

        hackingControls.setAttribute("style", "position:absolute;z-index:3;");
        hackingControls.setAttribute("src", "images/hackingControls.png");
        hackingControls.setAttribute("id", "hackingControls");

        hackingBtnCapture.setAttribute("type", "image");
        hackingBtnCapture.setAttribute("src", "images/hackingBtnCapture.png");
        hackingBtnCapture.setAttribute("style", "position:absolute;z-index:4;");
        hackingBtnCapture.setAttribute("id", "hackingBtnCapture");
        hackingBtnCapture.setAttribute("onmouseover", "changeIconCapture0();");
        hackingBtnCapture.setAttribute("onmouseout", "changeIconCapture1();");

        hackingBtnDefend.setAttribute("type", "image");
        hackingBtnDefend.setAttribute("src", "images/hackingBtnDefend.png");
        hackingBtnDefend.setAttribute("style", "position:absolute;z-index:4;");
        hackingBtnDefend.setAttribute("id", "hackingBtnDefend");
        hackingBtnDefend.setAttribute("onmouseover", "changeIconDefend0();");
        hackingBtnDefend.setAttribute("onmouseout", "changeIconDefend1();");

        hackingBtnNuke.setAttribute("type", "image");
        hackingBtnNuke.setAttribute("src", "images/hackingBtnNuke.png");
        hackingBtnNuke.setAttribute("style", "position:absolute;z-index:4;");
        hackingBtnNuke.setAttribute("id", "hackingBtnNuke");
        hackingBtnNuke.setAttribute("onmouseover", "changeIconNuke0();");
        hackingBtnNuke.setAttribute("onmouseout", "changeIconNuke1();");

        hackingBtnStop.setAttribute("type", "image");
        hackingBtnStop.setAttribute("src", "images/hackingBtnStop.png");
        hackingBtnStop.setAttribute("style", "position:absolute;z-index:4;");
        hackingBtnStop.setAttribute("id", "hackingBtnStop");
        hackingBtnStop.setAttribute("onmouseover", "changeIconStop0();");
        hackingBtnStop.setAttribute("onmouseout", "changeIconStop1();");

        document.body.appendChild(hackingBtnCapture);
        document.body.appendChild(hackingBtnDefend);
        document.body.appendChild(hackingBtnNuke);
        document.body.appendChild(hackingBtnStop);

        document.body.appendChild(hackingControls);

        hackingControls.style.top = (y - 80) + 'px';
        hackingControls.style.left = (x + 40) + 'px';

        hackingBtnCapture.style.top = (y - 68) + 'px';
        hackingBtnCapture.style.left = (x + 122) + 'px';

        hackingBtnDefend.style.top = (y + 7) + 'px';
        hackingBtnDefend.style.left = (x + 113) + 'px';

        hackingBtnNuke.style.top = (y - 28) + 'px';
        hackingBtnNuke.style.left = (x + 58) + 'px';

        hackingBtnStop.style.top = (y - 30) + 'px';
        hackingBtnStop.style.left = (x + 178) + 'px';

    } else {
        document.getElementById("hackingControls").style.top = (y - 80) + 'px';
        document.getElementById("hackingControls").style.left = (x + 40) + 'px';

        document.getElementById("hackingBtnCapture").style.top = (y - 68) + 'px';
        document.getElementById("hackingBtnCapture").style.left = (x + 122) + 'px';

        document.getElementById("hackingBtnDefend").style.top = (y + 7) + 'px';
        document.getElementById("hackingBtnDefend").style.left = (x + 113) + 'px';

        document.getElementById("hackingBtnNuke").style.top = (y - 28) + 'px';
        document.getElementById("hackingBtnNuke").style.left = (x + 58) + 'px';

        document.getElementById("hackingBtnStop").style.top = (y - 30) + 'px';
        document.getElementById("hackingBtnStop").style.left = (x + 178) + 'px';
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
    allyNode.setAttribute("style", "position:absolute;z-index:2;");
    allyNode.setAttribute("src", "images/allyNode2.png");
    allyNode.setAttribute("id", "allyNode");
    allyNode.setAttribute("onclick", "showControls();");
    document.body.appendChild(allyNode);
    var xy = getRandomPosition(allyNode);
    allyNode.style.top = xy[1] + 'px';
    allyNode.style.left = xy[0] + 'px';

    var enemyNode = document.createElement('IMG');
    enemyNode.setAttribute("style", "position:absolute;z-index:2;");
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
        file[i].setAttribute("style", "position:absolute;z-index:2;");
        file[i].setAttribute("src", "images/fileUncap1.png");
        file[i].setAttribute("id", "file" + i);
        file[i].setAttribute("onclick", "showControls();");
        document.body.appendChild(file[i]);
        var xy = getRandomPosition(file[i]);
        file[i].style.top = xy[1] + 'px';
        file[i].style.left = xy[0] + 'px';
    }

    for (var i = 0; i < 7 ; i++) {
        var line = [];
        line[i] = document.createElement('IMG');
        line[i].setAttribute("style", "position:absolute;z-index:0;");
        line[i].setAttribute("src", "images/fullLine.png");
        line[i].setAttribute("id", "line" + i);
        document.body.appendChild(line[i]);

        if (i == 0) {
            var filePosition = lineRotationFile(0, 1, 0);
            line[i].style.left = filePosition[0] + 'px';
            line[i].style.top = filePosition[1] + 'px';
        }

        if (i == 1) {
            var filePosition = lineRotationFile(1, 2, 1);
            line[i].style.left = filePosition[0] + 'px';
            line[i].style.top = filePosition[1] + 'px';
        }

        if (i == 2) {
            var filePosition = lineRotationFile(2, 3, 2);
            line[i].style.left = filePosition[0] + 'px';
            line[i].style.top = filePosition[1] + 'px';
        }

        if (i == 3) {
            var filePosition = lineRotationFile(3, 4, 3);
            line[i].style.left = filePosition[0] + 'px';
            line[i].style.top = filePosition[1] + 'px';
        }

        if (i == 4) {
            var filePosition = lineRotationFile(4, 5, 4);
            line[i].style.left = filePosition[0] + 'px';
            line[i].style.top = filePosition[1] + 'px';
        }

        if (i == 5) {
            var filePosition = lineRotationNodes("enemyNode", 5);
            line[i].style.left = filePosition[0] + 'px';
            line[i].style.top = filePosition[1] + 'px';
        }

        if (i == 6) {
            var filePosition = lineRotationNodes("allyNode", 6);
            line[i].style.left = filePosition[0] + 'px';
            line[i].style.top = filePosition[1] + 'px';
        }
    }

    var canvas = document.createElement('canvas');
    canvas.setAttribute("id", "lineCanvas");
    canvas.setAttribute("width", $(window).width());
    canvas.setAttribute("height", $(window).height());
    canvas.setAttribute("onclick", "removeControls();");
    document.body.appendChild(canvas);
}