import { IComponent } from "./component";
import { Vector2 } from "../generics/vector2";

export class Transform implements IComponent {
    public position = new Vector2();
    
    public constructor(x?, y?, vec3?) {
        if(x !== undefined) {
            this.position.x = x;
        }

        if(y !== undefined) {
            this.position.y = y;
        }

        if(vec3 !== undefined) {
            this.position = vec3;
        }
    }

    start(): void {
        return;
    }

    update(dt: number): void {
        return;
    }

}