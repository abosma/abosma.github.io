import { GameObject } from "../objects/gameObject";

export class ObjectHandler {
    private static instance: ObjectHandler;
    private constructor() {}
    
    private gameObjects : GameObject[] = new Array<GameObject>();

    public start() : void {
        return;
    }

    public static getInstance() : ObjectHandler {
        if(!ObjectHandler.instance) {
            ObjectHandler.instance = new ObjectHandler();
        }

        return ObjectHandler.instance;
    }

    public addGameObject(gameObject : GameObject) {
        if(this.gameObjects.indexOf(gameObject) == -1) {
            this.gameObjects.push(gameObject);
        }
    }

    public update(dt) {
        for(let i = this.gameObjects.length; i--;) {
            this.gameObjects[i].update(dt);
        }
    }
}