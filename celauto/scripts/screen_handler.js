class ScreenHandler {
    ctx;
    canvas;
    canvasData;
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;

    start() {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");

        canvas.width = this.canvasWidth;
        canvas.height = this.canvasHeight;

        this.canvasData = this.ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight);
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

            this.ctx.fillStyle = "red";
            this.ctx.fillRect(pixel.x, pixel.y, 1, 1);
        }
    }
}