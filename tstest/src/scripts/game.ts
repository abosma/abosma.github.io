import { InputHandler } from "./handlers/inputHandler";
import { ObjectHandler } from "./handlers/objectHandler";
import { RenderHandler } from "./handlers/renderHandler";
import { LogHandler } from "./handlers/logHandler";
import { MouseHandler } from "./handlers/mouseHandler";
import { Wall } from "./prefabs/wall";
import { Player } from "./prefabs/player";

const objectHandler = ObjectHandler.getInstance();
const renderHandler = RenderHandler.getInstance();
const inputHandler = InputHandler.getInstance();
const mouseHandler = new MouseHandler();

const dt: number = 0.01;

let currentTime: number = performance.now();
let accumulator: number = 0.0;

function init() {
  objectHandler.start();
  renderHandler.start();
  inputHandler.start();

  let player = new Player();
  let wall = new Wall();

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
  LogHandler.printLogs();

  window.requestAnimationFrame(update);
}

window.onload = () => init();
