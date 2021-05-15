const PixelType = {
    SAND : 1,
    WATER : 2
}

class Color {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}

class Pixel {
    constructor(x, y, color, pixelType) {
        this.id = Pixel.generateId();
        this.x = x;
        this.y = y;
        this.color = color;
        this.pixelType = pixelType;
    }

    static generateId() {
        if(!this.lastId) {
            this.lastId = 1;
        } else {
            this.lastId++;
        }

        return this.lastId;
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
            let pixel = this.pixelArray[i];

            pixel.y += 1;

            for(let z = 0; z < this.pixelArray.length; z++) {
                let otherPixel = this.pixelArray[z];

                if(pixel.id == otherPixel.id) {
                    break;
                }

                if(pixel.pixelType == PixelType.SAND) {
                    if(pixel.x == otherPixel.x && pixel.y == otherPixel.y) {
                        pixel.y -= 1;
                        break;
                    }
                }
            }

            if(pixel.y >= screenHandler.canvasHeight - 100) {
                pixel.y = screenHandler.canvasHeight - 100;
                continue;
            }
        }
    }

    addPixel(x, y, color, pixelType) {
        let toAddPixel = new Pixel(x, y, color, pixelType);
        this.pixelArray.push(toAddPixel);
    }
}