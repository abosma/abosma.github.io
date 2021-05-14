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
    }

    fillCanvas() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    drawPixel(x, y, pixel) {
        var index = (x + y * canvasWidth) * 4;
    
        canvasData.data[index + 0] = pixel.r;
        canvasData.data[index + 1] = pixel.g;
        canvasData.data[index + 2] = pixel.b;
        canvasData.data[index + 3] = pixel.a;
    }
}