import { GameObject } from "../objects/gameObject";
import { IComponent } from "./component";
import { Transform } from "./transform";

export class Collider implements IComponent {
    gameObject: GameObject;
    transform : Transform;

    start(): void {
        this.transform = this.gameObject.getComponent(Transform);
    }

    update(dt: number): void {
        // Not needed
    }
}