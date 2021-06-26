import { Renderer } from "./components/renderer";
import { ObjectHandler } from "./handlers/objectHandler";
import { RenderHandler } from "./handlers/renderHandler";
import { GameObject } from "./objects/gameObject";

const objectHandler = ObjectHandler.getInstance();
const renderHandler = RenderHandler.getInstance();

const dt : number = 0.01;

let currentTime : number = performance.now();
let accumulator : number = 0.0;

function init() {
    let player : GameObject = new GameObject("Player");
    
    let image : CanvasImageSource = new Image();
    image.src = "./src/assets/player.png";

    player.addComponent(new Renderer(image));

    window.requestAnimationFrame(update);
}

function update() {
    let newTime : number = performance.now();
    let frameTime : number = newTime - currentTime;

    currentTime = newTime;
    accumulator += frameTime;

    while(accumulator >= dt) {
        objectHandler.update(dt);
        accumulator -= dt;
    }

    renderHandler.update(dt);

    window.requestAnimationFrame(update);
}

window.onload = () => init();