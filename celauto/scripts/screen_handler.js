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

    drawPixel(pixel) {
        var index = (pixel.x + pixel.y * this.canvasWidth) * 4;
    
        this.canvasData.data[index + 0] = pixel.color.r;
        this.canvasData.data[index + 1] = pixel.color.g;
        this.canvasData.data[index + 2] = pixel.color.b;
        this.canvasData.data[index + 3] = pixel.color.a;

        this.ctx.putImageData(this.canvasData, 0, 0);
    }
}