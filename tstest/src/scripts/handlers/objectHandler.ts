import { Collider } from "../components/collider";
import { GameObject } from "../objects/gameObject";

export class ObjectHandler {
    private static instance: ObjectHandler;
    private constructor() { }

    private gameObjects: GameObject[] = new Array<GameObject>();

    public start(): void {
        return;
    }

    public static getInstance(): ObjectHandler {
        if (!ObjectHandler.instance) {
            ObjectHandler.instance = new ObjectHandler();
        }

        return ObjectHandler.instance;
    }

    public addGameObject(gameObject: GameObject) {
        if (this.gameObjects.indexOf(gameObject) == -1) {
            this.gameObjects.push(gameObject);
        }
    }

    public getGameObjectsWithComponent<Type>(componentType: { new(): Type }): GameObject[] {
        let toReturnGameObjects: GameObject[] = [];

        for (let i = this.gameObjects.length; i--;) {
            if (this.gameObjects[i].hasComponent(Collider)) {
                toReturnGameObjects.push(this.gameObjects[i]);
            }
        }

        return toReturnGameObjects;
    }

    public update(dt) {
        for (let i = this.gameObjects.length; i--;) {
            this.gameObjects[i].update(dt);
            this.checkCollisions();
        }
    }

    public checkCollisions() {
        let colliderObjects: GameObject[] = this.getGameObjectsWithComponent(Collider);

        for (let y = colliderObjects.length; y--;) {
            for (let x = colliderObjects.length - 1; x--;) {
                let go1 = colliderObjects[y];
                let go2 = colliderObjects[x];

                if(this.aabbTest(go1, go2)) {
                    go1.onCollision.emit(go2);
                    go2.onCollision.emit(go1);
                }
            }
        }
    }

    public aabbTest(go1: GameObject, go2: GameObject) {
        if (go1.transform.position.x < go2.transform.position.x + go2.transform.width &&
            go1.transform.position.x + go1.transform.width > go2.transform.position.x &&
            go1.transform.position.y < go2.transform.position.y + go2.transform.height &&
            go1.transform.position.y + go1.transform.height > go2.transform.position.y) {
            return true;
        }

        return false;
    }
}