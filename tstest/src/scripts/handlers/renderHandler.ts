import { Renderer } from "../components/renderer";

export class RenderHandler {
    private renderers : Renderer[] = new Array<Renderer>();
    
    private offscreenCanvas : HTMLCanvasElement;
    private offscreenContext : CanvasRenderingContext2D;

    private displayCanvas : HTMLCanvasElement;
    private displayContext : CanvasRenderingContext2D;

    private static instance: RenderHandler;
    
    private constructor() {
        this.displayCanvas = document.querySelector<HTMLCanvasElement>("#canvas");
        this.offscreenCanvas = document.createElement("canvas");

        this.offscreenCanvas.width = this.displayCanvas.width;
        this.offscreenCanvas.height = this.displayCanvas.height;

        this.displayContext = this.displayCanvas.getContext("2d");
        this.offscreenContext = this.offscreenCanvas.getContext("2d");
    }

    public static getInstance() : RenderHandler {
        if(!RenderHandler.instance) {
            RenderHandler.instance = new RenderHandler();
        }

        return RenderHandler.instance;
    }

    public addRenderer(renderer : Renderer) {
        if(this.renderers.indexOf(renderer) == -1) {
            this.renderers.push(renderer);
        }
    }

    public update(dt) {
        this.clearScreen();

        for(let i = this.renderers.length; i--;) {
            let renderer : Renderer = this.renderers[i];
            let rendererImage : CanvasImageSource = renderer.image;
            let rendererImageWidth : number = rendererImage.width as number;
            let rendererImageHeight : number = rendererImage.height as number;
            let rendererPositionX : number = renderer.gameObject.transform.position.x;
            let rendererPositionY : number = renderer.gameObject.transform.position.y;

            this.offscreenContext.drawImage(rendererImage, rendererPositionX, rendererPositionY, rendererImageWidth, rendererImageHeight);    
        }

        this.displayContext.drawImage(this.offscreenCanvas, 0, 0, this.offscreenCanvas.width, this.offscreenCanvas.height);
    }

    private clearScreen() {
        this.offscreenContext.fillRect(0, 0, this.displayCanvas.width, this.displayCanvas.height);
    }
}