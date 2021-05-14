let pixelHandler = new PixelHandler();
let screenHandler = new ScreenHandler();
let inputHandler = new InputHandler();

let oldTime;

window.onload = init;

function init() {
    screenHandler.start();
    inputHandler.start();

    window.requestAnimationFrame(update)
}

function update(time) {
    deltaTime = (time - oldTime);
    oldTime = time;

    pixelHandler.update(deltaTime);
    screenHandler.update(deltaTime);
    inputHandler.update(deltaTime);

    window.requestAnimationFrame(update);
}