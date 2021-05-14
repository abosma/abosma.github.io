class InputHandler {
    mouseOver = false;
    mouseDown = false;

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

        this.canvas.addEventListener("mousemove", (e) => {
            if(this.mouseOver && this.mouseDown) {
                pixelHandler.addPixel(e.offsetX, e.offsetY, new Color(255, 0, 0, 255));
            }
        });
    }
}