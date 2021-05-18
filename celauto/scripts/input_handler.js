class InputHandler {
    mouseOver = false;
    mouseDown = false;

    canvas = document.getElementById("canvas");
    pixelHandler = pixelHandler;
    
    selectedPixelIndex = 0;
    pixelTypeCount = Object.keys(PixelType).length;

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
            if(e.key == "e") {
                if(this.selectedPixelIndex + 1 == this.pixelTypeCount) {
                    this.selectedPixelIndex = 0;
                } else {
                    this.selectedPixelIndex += 1;
                }
            }
            
            if(e.key == "q") {
                if(this.selectedPixelIndex - 1 < 0) {
                    this.selectedPixelIndex = this.pixelTypeCount;
                } else {
                    this.selectedPixelIndex -= 1;
                }
            }
        })

        this.canvas.addEventListener("mousemove", (e) => {
            if(this.mouseOver && this.mouseDown) {
                pixelHandler.addPixel(new Pixel(e.offsetX, e.offsetY, 1, 1, PixelType[Object.keys(PixelType)[this.selectedPixelIndex]]));
            }
        });
    }
}