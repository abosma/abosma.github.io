import { Renderer } from "../components/renderer";

export class RenderHandler {
  private renderers: Renderer[] = new Array<Renderer>();
  private debugText: string[] = new Array<string>();

  private offscreenCanvas: HTMLCanvasElement;
  private offscreenContext: CanvasRenderingContext2D;

  private displayCanvas: HTMLCanvasElement;
  private displayContext: CanvasRenderingContext2D;

  private static instance: RenderHandler;

  private constructor() {}

  public start(): void {
    this.displayCanvas = document.querySelector<HTMLCanvasElement>("#canvas");
    this.offscreenCanvas = document.createElement("canvas");

    this.offscreenCanvas.width = this.displayCanvas.width;
    this.offscreenCanvas.height = this.displayCanvas.height;

    this.displayContext = this.displayCanvas.getContext("2d");
    this.offscreenContext = this.offscreenCanvas.getContext("2d");
  }

  public static getInstance(): RenderHandler {
    if (!RenderHandler.instance) {
      RenderHandler.instance = new RenderHandler();
    }

    return RenderHandler.instance;
  }

  public addRenderer(renderer: Renderer) {
    if (this.renderers.indexOf(renderer) == -1) {
      this.renderers.push(renderer);
    }
  }

  public addDebugText(text: string[]) {
    // Max 20 lines of debug text
    this.debugText = text.slice(-20);
  }

  public update(dt) {
    this.clearScreen();
    this.drawRenderers();
    this.drawDebug();

    this.displayContext.drawImage(
      this.offscreenCanvas,
      0,
      0,
      this.offscreenCanvas.width,
      this.offscreenCanvas.height,
    );
  }

  private clearScreen() {
    this.offscreenContext.fillRect(
      0,
      0,
      this.displayCanvas.width,
      this.displayCanvas.height,
    );
  }

  private drawRenderers() {
    for (let i = this.renderers.length; i--; ) {
      let renderer: Renderer = this.renderers[i];
      let rendererImage: HTMLImageElement = renderer.image;
      let rendererImageWidth: number = rendererImage.width as number;
      let rendererImageHeight: number = rendererImage.height as number;
      let rendererPositionX: number = renderer.gameObject.transform.position.x;
      let rendererPositionY: number = renderer.gameObject.transform.position.y;

      this.offscreenContext.drawImage(
        rendererImage,
        rendererPositionX,
        rendererPositionY,
        rendererImageWidth,
        rendererImageHeight,
      );
    }
  }

  private drawDebug() {
    this.offscreenContext.fillStyle = "white";
    this.offscreenContext.globalAlpha = 0.5;
    this.offscreenContext.fillRect(
      this.displayCanvas.width * 0.8,
      this.displayCanvas.height * 0.03,
      300,
      320,
    );

    this.offscreenContext.font = "small-caps bold 12px sans-serif";
    this.offscreenContext.fillStyle = "black";
    this.offscreenContext.globalAlpha = 1;

    for (let i = this.debugText.length; i--; ) {
      this.offscreenContext.fillText(
        this.debugText[i],
        this.displayCanvas.width * 0.81,
        this.displayCanvas.height * 0.06 + 15 * i,
      );
    }
  }
}
