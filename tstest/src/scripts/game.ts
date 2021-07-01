import { PlayerMovement } from "./components/playerMovement";
import { Renderer } from "./components/renderer";
import { InputHandler } from "./handlers/inputHandler";
import { ObjectHandler } from "./handlers/objectHandler";
import { RenderHandler } from "./handlers/renderHandler";
import { GameObject } from "./objects/gameObject";

const objectHandler = ObjectHandler.getInstance();
const renderHandler = RenderHandler.getInstance();
const inputHandler = InputHandler.getInstance();

const dt : number = 0.01;

let currentTime : number = performance.now();
let accumulator : number = 0.0;

function init() {
    objectHandler.start();
    renderHandler.start();
    inputHandler.start();
    
    let player = new GameObject("Player");
    let renderer = player.addComponent(new Renderer());
    let playerImage = new Image();

    playerImage.src = "src/assets/player.png";
    renderer.image = playerImage;

    player.addComponent(new PlayerMovement());

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