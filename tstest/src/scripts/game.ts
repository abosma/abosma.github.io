import { ObjectHandler } from "./handlers/objectHandler";
import { GameObject } from "./objects/gameObject";

let oldTime : number = performance.now();

function init() {
    let player : GameObject = new GameObject("Player");

    console.log(player.transform.position);

    window.requestAnimationFrame(update);
}

function update(time : number) {
    let deltaTime = (time - oldTime) / 1000;
    oldTime = time;

    ObjectHandler.getInstance().update(deltaTime);

    window.requestAnimationFrame(update);
}

window.onload = () => init();