import { FollowMouse } from "./components/followMouse";
import { ObjectHandler } from "./handlers/objectHandler";
import { GameObject } from "./objects/gameObject";

const objectHandler = ObjectHandler.getInstance();
const dt : number = 0.01;

let currentTime : number = performance.now();
let accumulator : number = 0.0;

function init() {
    let player : GameObject = new GameObject("Player");

    player.addComponent(new FollowMouse());

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

    window.requestAnimationFrame(update);
}

window.onload = () => init();