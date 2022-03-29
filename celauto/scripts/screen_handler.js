class ScreenHandler {
    displayCanvas;
    displayCanvasContext;
    
    offscreenCanvas;
    offscreenCanvasContext;

    pixelCache = [];

    start() {
        this.displayCanvas = document.getElementById("canvas");
        this.displayCanvasContext = canvas.getContext("2d", {alpha: false});

        this.offscreenCanvas = document.createElement("canvas");
        this.offscreenCanvasContext = this.offscreenCanvas.getContext("2d", {alpha: false});

        this.displayCanvas.width = width;
        this.displayCanvas.height = height;

        this.offscreenCanvas.width = width;
        this.offscreenCanvas.height = height;
    }

    update() {
        this.render();
        this.fillScreen();
    }

    fillScreen() {
        this.offscreenCanvasContext.fillStyle = "black";
        this.offscreenCanvasContext.fillRect(0, 0, width, height);
    }

    addPixelToPixelCache(pixel) {
        this.pixelCache.push(pixel);
    }

    drawPixelCache() {
        this.offscreenCanvasContext.beginPath();
        
        for(var i = 0; i < this.pixelCache.length; i++) {
            this.offscreenCanvasContext.fillStyle = this.pixelCache[i].pixelType.color.toHex();
            this.offscreenCanvasContext.rect(this.pixelCache[i].x, this.pixelCache[i].y, this.pixelCache[i].width, this.pixelCache[i].height);
        }

        this.offscreenCanvasContext.fill();

        this.pixelCache.length = 0;
    }

    render() {
        this.displayCanvasContext.drawImage(this.offscreenCanvas, 0, 0);
    }
}