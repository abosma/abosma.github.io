import { Renderer } from "../components/renderer";

export class RenderHandler {
    private renderers : Renderer[] = new Array<Renderer>();
    private gl : WebGL2RenderingContext;
    
    private static instance: RenderHandler;
    
    private constructor() {
        const canvas : HTMLCanvasElement= document.querySelector<HTMLCanvasElement>("#canvas");
        
        this.gl = canvas.getContext("webgl2");

        if (this.gl === null) {
            alert("Unable to initialize WebGL. Your browser or machine may not support it.");
            return;
        }
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
            
        }
    }

    private clearScreen() {
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
}