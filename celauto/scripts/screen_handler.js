class ScreenHandler {
    ctx;
    canvas;
    canvasWidth = 500;
    canvasHeight = 500;

    start() {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");

        canvas.width = this.canvasWidth;
        canvas.height = this.canvasHeight;
    }

    update(dt) {
        this.fillCanvas();
        this.drawPixels();
    }

    fillCanvas() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    drawPixels() {
        for(let i = 0; i < pixelHandler.pixelArray.length; i++) {
            let pixel = pixelHandler.pixelArray[i];

            this.ctx.fillStyle = pixel.color.getHex();
            this.ctx.fillRect(pixel.x, pixel.y, pixel.width, pixel.height);
        }
    }
}