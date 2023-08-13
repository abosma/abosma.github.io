import { Vector2 } from "../generics/vector2";
import { LogHandler } from "./logHandler";

export class MouseHandler {
  private static mouseX: number;
  private static mouseY: number;

  public static mouseDown: boolean;

  private static instance: MouseHandler;

  public static getInstance(): MouseHandler {
    if (!MouseHandler.instance) {
      MouseHandler.instance = new MouseHandler();
    }

    return MouseHandler.instance;
  }

  constructor() {}

  public start(): void {
    window.addEventListener("mousemove", (event: MouseEvent) => {
      MouseHandler.mouseX = event.x;
      MouseHandler.mouseY = event.y;
    });

    window.addEventListener("mousedown", () => {
      MouseHandler.mouseDown = true;
    });

    window.addEventListener("mouseup", () => {
      MouseHandler.mouseDown = false;
    });

    LogHandler.log("Started MouseHandler");
  }

  public static getPosition(): Vector2 {
    return new Vector2(MouseHandler.mouseX, MouseHandler.mouseY);
  }

  public static isOverObject(position: Vector2, radius: number): boolean {
    const mousePos = MouseHandler.getPosition();

    return (
      Math.pow(mousePos.x - position.x, 2) +
        Math.pow(mousePos.y - position.y, 2) <
      Math.pow(radius, 2)
    );
  }
}
