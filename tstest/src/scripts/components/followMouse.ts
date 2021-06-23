import { Vector2 } from "../generics/vector2";
import { GameObject } from "../objects/gameObject";
import { IComponent } from "./component";

export class FollowMouse implements IComponent {
    gameObject: GameObject;
    
    private mouseX : number = 0;
    private mouseY : number = 0;

    constructor() {
        document.addEventListener("mousemove", (mouseEvent) => {
            this.mouseX = mouseEvent.x;
            this.mouseY = mouseEvent.y;
        })
    }

    start(): void {
        return;
    }

    update(dt: number): void {
        this.gameObject.transform.position = new Vector2(this.mouseX, this.mouseY);
    }
}