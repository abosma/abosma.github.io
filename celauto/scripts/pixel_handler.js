class Color {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}

class Pixel {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

class PixelHandler {
    constructor() {
        this.pixelArray = [];
    }
    
    start() {

    }

    update(dt) {
        for(let i = 0; i < this.pixelArray.length; i++) {
            screenHandler.drawPixel(this.pixelArray[i]);
        }
    }

    addPixel(x, y, color) {
        let toAddPixel = new Pixel(x, y, color);
        this.pixelArray.push(toAddPixel);
    }
}