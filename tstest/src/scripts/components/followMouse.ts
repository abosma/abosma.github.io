import { Vector2 } from "../generics/vector2";
import { MouseHandler } from "../handlers/mouseHandler";
import { GameObject } from "../objects/gameObject";
import { IComponent } from "./component";
import { Renderer } from "./renderer";

export class FollowMouse implements IComponent {
    gameObject: GameObject;

    public shouldFollow: boolean;

    private renderer: Renderer;
    private image: HTMLImageElement;

    start(): void {
        this.renderer = this.gameObject.getComponent(Renderer);
        
        if(this.renderer) {
            this.image = this.renderer.image;
        }
    }

    update(dt: number): void {
        if (!this.shouldFollow) {
            return;
        }

        const mousePos = MouseHandler.getPosition();

        if(!this.image) {
            this.gameObject.transform.position = mousePos;
        } else {
            this.gameObject.transform.position = new Vector2(mousePos.x - this.image.width / 2, mousePos.y - this.image.height / 2);
        }
    }
}