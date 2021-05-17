class InputHandler {
    mouseOver = false;
    mouseDown = false;

    selectedPixelType = PixelType.SAND;

    canvas = document.getElementById("canvas");
    pixelHandler = pixelHandler;

    start() {
        this.initialize_callbacks();
    }

    update(dt) {
        
    }

    initialize_callbacks() {
        this.canvas.addEventListener("mouseenter", () => {
            this.mouseOver = true;
        });

        this.canvas.addEventListener("mouseout", () => {
            this.mouseOver = false;
        });

        this.canvas.addEventListener("mousedown", () => {
            this.mouseDown = true;
        });

        this.canvas.addEventListener("mouseup", () => {
            this.mouseDown = false;
        });

        window.addEventListener("keydown", (e) => {
            let selectedIndex = Object.keys(PixelType).indexOf(this.selectedPixelType);
            
            if(e.key == "e") {
                
            }
            
            if(e.key == "q") {
                
            }
        })

        this.canvas.addEventListener("mousemove", (e) => {
            if(this.mouseOver && this.mouseDown) {
                pixelHandler.addPixel(new Pixel(e.offsetX, e.offsetY, 1, 1, new Color(255, 0, 0), this.selectedPixelType));
            }
        });
    }
}