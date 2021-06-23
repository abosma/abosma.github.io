import { IComponent } from "./component";
import { Vector2 } from "../generics/vector2";
import { GameObject } from "../objects/gameObject";

export class Transform implements IComponent {
    public position : Vector2 = new Vector2();

    private startPosition : Vector2;
    private endPosition : Vector2;
    private isMoving : boolean = false;
    private distance : number;
    private direction : Vector2;
    private speed : number;

    gameObject: GameObject;

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
        if(this.isMoving) {
            this.position = Vector2.addVectors(this.position, this.direction.multiply(this.speed * dt));

            if(Vector2.distance(this.startPosition, this.position) >= this.distance) {
                this.position = this.endPosition;
                this.isMoving = false;
            }
        }
    }

    moveTo(pos : Vector2, speed : number) : void {
        this.startPosition = this.position;
        this.endPosition = pos;
        this.distance = Vector2.distance(this.startPosition, pos);
        this.speed = speed / 1000;
        this.direction = Vector2.normalize(Vector2.subtractVectors(pos, this.startPosition));
        this.isMoving = true;
    }
}