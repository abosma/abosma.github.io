import * as GameConfig from "../../config/gameConfig.json";
import { Pixel } from "../objects/pixel";

export class ScreenHandler {
    private offscreenCanvas : HTMLCanvasElement;
    private offscreenContext : CanvasRenderingContext2D;
    
    private displayCanvas : HTMLCanvasElement;
    private displayContext : CanvasRenderingContext2D;
    
    private toDrawPixels : Pixel[];

    private static instance: ScreenHandler;
    private constructor() {}

    public static getInstance() : ScreenHandler {
        if(!ScreenHandler.instance) {
            ScreenHandler.instance = new ScreenHandler();
        }

        return ScreenHandler.instance;
    }

    public start() : void {
        this.displayCanvas = document.querySelector<HTMLCanvasElement>("#canvas");
        this.offscreenCanvas = document.createElement("canvas");

        this.displayCanvas.height = GameConfig.canvasHeight;
        this.displayCanvas.width = GameConfig.canvasWidth;

        this.offscreenCanvas.height = GameConfig.canvasHeight;
        this.offscreenCanvas.width = GameConfig.canvasWidth;

        this.displayContext = this.displayCanvas.getContext("2d");
        this.offscreenContext = this.offscreenCanvas.getContext("2d");

        this.toDrawPixels = [];
    }

    public addPixel(pixel : Pixel) {
        if(this.toDrawPixels.includes(pixel)) {
            return;
        }

        this.toDrawPixels.push(pixel);
    }

    public update() {
        this.clearScreen();
        this.drawPixels();

        this.displayContext.drawImage(this.offscreenCanvas, 0, 0, this.offscreenCanvas.width, this.offscreenCanvas.height);
    }

    private clearScreen() {
        this.offscreenContext.fillStyle = "black";
        this.offscreenContext.fillRect(0, 0, this.displayCanvas.width, this.displayCanvas.height);
    }

    private drawPixels() {
        for(let i = 0; i < this.toDrawPixels.length; i++) {
            let pixel = this.toDrawPixels[i];
            this.offscreenContext.fillStyle = "red";
            this.offscreenContext.fillRect(pixel.x, pixel.y, 5, 5);
        }

        this.toDrawPixels = [];
    }
}