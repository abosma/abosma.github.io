import { Collider } from "./components/collider";
import { PlayerMovement } from "./components/playerMovement";
import { Renderer } from "./components/renderer";
import { Vector2 } from "./generics/vector2";
import { InputHandler } from "./handlers/inputHandler";
import { ObjectHandler } from "./handlers/objectHandler";
import { RenderHandler } from "./handlers/renderHandler";
import { LogHandler } from "./handlers/logHandler";
import { GameObject } from "./objects/gameObject";
import { MouseHandler } from "./handlers/mouseHandler";
import { FollowMouse } from "./components/followMouse";
import { Dragger } from "./components/dragger";

const objectHandler = ObjectHandler.getInstance();
const renderHandler = RenderHandler.getInstance();
const inputHandler = InputHandler.getInstance();
const logHandler = LogHandler.getInstance();
const mouseHandler = new MouseHandler();

const dt: number = 0.01;

let currentTime: number = performance.now();
let accumulator: number = 0.0;

function init() {
    objectHandler.start();
    renderHandler.start();
    inputHandler.start();

    let player = new GameObject("Player");
    let renderer = player.addComponent(new Renderer());
    let playerImage = new Image();

    playerImage.src = "src/assets/player.png";
    renderer.image = playerImage;
    player.transform.height = 64;
    player.transform.width = 64;

    player.addComponent(new Collider());
    player.addComponent(new PlayerMovement());
    player.addComponent(new FollowMouse());
    player.addComponent(new Dragger());

    let wall = new GameObject("Wall");
    let wallRenderer = wall.addComponent(new Renderer());
    let wallImage = new Image();

    wallImage.src = "src/assets/wall.png";
    wallRenderer.image = wallImage;

    wall.transform.height = 64;
    wall.transform.width = 64;

    wall.transform.position = new Vector2(500, 500);

    wall.addComponent(new Collider());

    window.requestAnimationFrame(update);
}

function update() {
    let newTime: number = performance.now();
    let frameTime: number = newTime - currentTime;

    currentTime = newTime;
    accumulator += frameTime;

    while (accumulator >= dt) {
        objectHandler.update(dt);
        accumulator -= dt;
    }

    renderHandler.update(dt);
    logHandler.printLogs();

    window.requestAnimationFrame(update);
}

window.onload = () => init();
