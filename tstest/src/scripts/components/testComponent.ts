import { GameObject } from "../objects/gameObject";
import { IComponent } from "./component";

export class TestComponent implements IComponent {
    gameObject: GameObject;
    
    start(): void {
        console.log("Started TestComponent");
    }

    update(dt: number): void {
        
    }
}