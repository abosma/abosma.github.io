var pFight = document.getElementById("pFight"),
    pFightBox = document.getElementById("pFight").getBoundingClientRect(),
    pFightPosX = pFightBox.left,
    pFightPosY = pFightBox.top;
var dFight = document.getElementById("dFight"),
    dFightBox = document.getElementById("dFight").getBoundingClientRect(),
    dFightPosX = dFightBox.left,
    dFightPosY = pFightBox.top,
    dFightPos = (dFightPosY/2) + (dFightPosX/2);

window.addEventListener('keyup', function (event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function (event) { Key.onKeydown(event); }, false);

var Key = {
    _pressed: {},

    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,

    isDown: function (keyCode) {
        return this._pressed[keyCode];
    },

    onKeydown: function (event) {
        this._pressed[event.keyCode] = true;
    },

    onKeyup: function (event) {
        delete this._pressed[event.keyCode];
    }
};

function Player() {
    this.x = pFightPosX;
    this.y = pFightPosY;
    this.speed = 0.3;
}

Player.prototype.moveLeft = function () {
    this.x -= this.speed;
    console.log("Pressed left");
};

Player.prototype.moveRight = function () {
    this.x += this.speed;
    console.log("Pressed right");
};

Player.prototype.moveUp = function () {
    this.y -= this.speed;
    console.log("Pressed up");
};

Player.prototype.moveDown = function () {
    this.y += this.speed;
    console.log("Press down");
};

Player.prototype.draw = function (interpolationPercentage) {
    pFightPosX = this.x;
    pFightPosY = this.y;

    pFight.style.left = pFightPosX + "%";
    pFight.style.top = pFightPosY + "%";

}

Player.prototype.update = function () {
    if (Key.isDown(Key.UP)) this.moveUp();
    if (Key.isDown(Key.LEFT)) this.moveLeft();
    if (Key.isDown(Key.DOWN)) this.moveDown();
    if (Key.isDown(Key.RIGHT)) this.moveRight();
};

function Enemy() {
    this.x = dFightPosX;
    this.y = dFightPosY;
    this.pos = (this.x / 2) + (this.y / 2);
    this.speed = 0.01;
}

Enemy.prototype.update = function () {
    this.x -= this.speed;
    this.pos = (this.x / 2) + (this.y / 2);
}

Enemy.prototype.draw = function (interpolationPercentage) {
    dFight.style.left = this.x + "%";
}

function update(delta) {
    for (var i = 0, l = Objects.length; i < l; i++) {
        Objects[i].update(delta);
    }
    console.log("Player X: " + pFightPosX);
    console.log("Player Y: " + pFightPosY);
    console.log("Dog position: " + dFightPos)
}

function draw(interpolationPercentage) {
    for (var i = 0, l = Objects.length; i < l; i++) {
        Objects[i].draw(interpolationPercentage);
    }
}

var Player = new Player(),
    Enemy = new Enemy(),
    Objects = [Player, Enemy];


MainLoop.setUpdate(update).setDraw(draw).start();