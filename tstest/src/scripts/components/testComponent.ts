import { IComponent } from "./component";

export class TestComponent implements IComponent {
    start(): void {
        console.log("Started TestComponent");
    }

    update(dt: number): void {
        console.log("%.10f", dt);
    }
}