import { GameObject } from "../objects/gameObject";
import { IComponent } from "./component";

export class Renderer implements IComponent {
    gameObject: GameObject;

    start(): void {
        return;
    }

    update(dt: number): void {
        return;
    }
}