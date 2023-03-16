import { Collider } from "../components/collider";
import { PlayerMovement } from "../components/playerMovement";
import { Renderer } from "../components/renderer";
import { Vector2 } from "../generics/vector2";
import { LogHandler } from "../handlers/logHandler";
import { GameObject } from "../objects/gameObject";

export class Wall extends GameObject {
    public collider: Collider;
    public renderer: Renderer;
    
    public start(): void {
        this.collider = this.addComponent(new Collider);
        this.renderer = this.addComponent(new Renderer);

        let wallImage = new Image();
        wallImage.src = "src/assets/wall.png";

        this.renderer.image = wallImage;

        this.transform.height = 64;
        this.transform.width = 64;
        this.transform.position = new Vector2(500, 500);
    }
}