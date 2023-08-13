import { Collider } from "../components/collider";
import { Dragger } from "../components/dragger";
import { FollowMouse } from "../components/followMouse";
import { PlayerMovement } from "../components/playerMovement";
import { Renderer } from "../components/renderer";
import { GameObject } from "../objects/gameObject";

export class Player extends GameObject {
  private renderer: Renderer;
  private collider: Collider;
  private playerMovement: PlayerMovement;

  constructor() {
    super();
    this.renderer = this.addComponent(new Renderer());
    let playerImage = new Image();

    playerImage.src = "src/assets/player.png";
    this.renderer.image = playerImage;

    this.transform.height = 64;
    this.transform.width = 64;

    this.collider = this.addComponent(new Collider());
    this.playerMovement = this.addComponent(new PlayerMovement());

    this.addComponent(new FollowMouse());
    this.addComponent(new Dragger());
  }
}
