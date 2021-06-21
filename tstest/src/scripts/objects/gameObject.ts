import { IComponent } from "../components/component";
import { ObjectHandler } from "../handlers/objectHandler";

export class GameObject {
    public components : IComponent[] = new Array<IComponent>();
    public name : string;

    constructor(name? : string) {
        ObjectHandler.getInstance().addGameObject(this);

        this.name = name || "New GameObject";
        this.start();
    }

    public start(): void {
        console.log("Started", this.name);
    }

    public update(dt : number): void {
        for(let i = this.components.length; i--;) {
            this.components[i].update(dt);
        }
    }

    public addComponent<Type>(component : Type) : Type {
        let newComponent : IComponent = component as unknown as IComponent;
        
        if(this.components.indexOf(newComponent) == -1) {
            this.components.push(newComponent);
            newComponent.start();
            return component;
        }

        return null;
    }

    public getComponent<Type>(componentType : {new () : Type}) : Type {
        for(let i = this.components.length; i--;) {
            let component = this.components[i];

            if(component instanceof componentType) {
                return component;
            }
        }

        return null;
    }
}