import { RenderHandler } from "../handlers/renderHandler";
import { GameObject } from "../objects/gameObject";
import { IComponent } from "./component";

export class Renderer implements IComponent {
    gameObject: GameObject;
    private image : CanvasImageSource;

    constructor(image? : CanvasImageSource) {
        if(image !== undefined) {
            this.image = image;
        }

        RenderHandler.getInstance().addRenderer(this);
    }

    start(): void {
        return;
    }

    update(dt: number): void {
        return;
    }

    /**
     * Gets image
     * @returns image 
     */
    public getImage() : CanvasImageSource {
        return this.image;
    }

    /**
     * Sets image
     * @param image 
     */
    public setImage(image : CanvasImageSource) : void {
        this.image = image;
    }
}