import * as GameConfig from "../../config/gameConfig.json";
import { Pixel } from "../objects/pixel";
import { ScreenHandler } from "./screenHandler";

export class PixelHandler {
    private arrayWidth : number = 0;
    private arrayHeight : number = 0;
    private pixelArray : Pixel[][] = [];
    
    private static instance: PixelHandler;
    private constructor() {};

    public static getInstance() : PixelHandler {
        if(!PixelHandler.instance) {
            PixelHandler.instance = new PixelHandler();
        };

        return PixelHandler.instance;
    };

    public start() : void {
        this.arrayWidth = GameConfig.canvasWidth;
        this.arrayHeight = GameConfig.canvasHeight;

        for(let x = this.arrayWidth; x--;) {
            this.pixelArray[x] = [];
            for(let y = this.arrayHeight; y--;) {
                this.pixelArray[x][y] = new Pixel(x, y);
            };
        };

        let pixel : Pixel = new Pixel(250, 0, 1);
        pixel.state = 1;

        this.pixelArray[250][0] = pixel;
    };

    public update() : void {
        for(let x = 0; x < this.arrayWidth; ++x) {
            for(let y = 0; y < this.arrayHeight; ++y) {
                if(this.pixelArray[x][y].state == 0) {
                    continue;
                };

                let bottomY : number = y + 1;
                let bottomRightX : number = (x + this.arrayWidth + 1) % this.arrayWidth;
                let bottomLeftX : number = (x + this.arrayWidth - 1) % this.arrayWidth;

                if(bottomLeftX <= 0 || bottomRightX >= this.arrayWidth || bottomY >= this.arrayHeight) {
                    continue;
                }

                if(this.pixelArray[x][bottomY].state == 0) {
                    this.pixelArray[x][y].y += 1;
                    
                    this.updatePixel(x, y, x, y + 1);

                    continue;
                };
                
                if(this.pixelArray[bottomRightX][bottomY].state == 0) {
                    this.pixelArray[x][y].x += 1;
                    this.pixelArray[x][y].y += 1;
                    
                    this.updatePixel(x, y, x + 1, y + 1);

                    continue;
                };

                if(this.pixelArray[bottomLeftX][bottomY].state == 0) {
                    this.pixelArray[x][y].x -= 1;
                    this.pixelArray[x][y].y += 1;
                    
                    this.updatePixel(x, y, x - 1, y + 1);

                    continue;
                };
            };
        };
    };

    private updatePixel(oldX : number, oldY : number, newX : number, newY : number) : void {
        this.pixelArray[newX][newY] = this.pixelArray[oldX][oldY];
        this.pixelArray[oldX][oldY] = new Pixel(oldX, oldY, 1);

        ScreenHandler.getInstance().addPixel(this.pixelArray[newX][newY]);
    }
};