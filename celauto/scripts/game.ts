import { InputHandler, PixelHandler, ScreenHandler } from "./handlers/handlers";

const inputHandler = InputHandler.getInstance();
const pixelHandler = PixelHandler.getInstance();
const screenHandler = ScreenHandler.getInstance();

function init() {
    pixelHandler.start();
    screenHandler.start();
    inputHandler.start();
    
    window.requestAnimationFrame(update);
}

function update() {
    pixelHandler.update();
    screenHandler.update();
    inputHandler.update();

    window.requestAnimationFrame(update);
}

window.onload = () => init();