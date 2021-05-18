class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    // Taken from https://stackoverflow.com/a/39077686
    getHex() {
        let toReturnHex = "#" + [this.r, this.g, this.b].map(c => {
            let hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }).join('');

        return toReturnHex;
    }
}

const PixelType = {
    SAND : {
        value: 0, 
        color: new Color(255, 255, 0), 
        fallSpeed: 1
    },
    WATER : {
        value: 1, 
        color: new Color(153, 204, 255), 
        fallSpeed: 0.5
    }
};

class Pixel {
    constructor(x, y, width, height, pixelType) {
        this.id = Pixel.generateId();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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
        
    }
    
    start() {
        this.pixelArray = [];
    }

    update(dt) {
        for(let i = this.pixelArray.length; i--; ) {
            let pixel = this.pixelArray[i];

            let pixelBelow = this.getPixel(pixel.x, pixel.y - 1, pixel.id);
            let pixelBelowLeft = this.getPixel(pixel.x - 1, pixel.y - 1, pixel.id);
            let pixelBelowRight = this.getPixel(pixel.x + 1, pixel.y - 1, pixel.id);

            if(this.isStuck(pixel)) {
                pixel.y -= pixel.pixelType.fallSpeed;
            }
            
            this.keepInBounds(pixel);

            if(!pixelBelow) {
                pixel.y += pixel.pixelType.fallSpeed;
                continue;
            } else if(!pixelBelowLeft) {
                pixel.x -= pixel.pixelType.fallSpeed;
                continue;
            } else if(!pixelBelowRight) {
                pixel.x += pixel.pixelType.fallSpeed;
                continue;
            }

            // for(let z = 0; z < this.pixelArray.length; z++) {
            //     let otherPixel = this.pixelArray[z];

            //     if(pixel.id == otherPixel.id) {
            //         break;
            //     }

            //     if(pixel.pixelType == PixelType.SAND) {
            //         if(pixel.x == otherPixel.x && pixel.y - 1 != otherPixel.y - 1) {
            //             pixel.y += 1;
            //         }
            //     }
            // }
        }
    }

    addPixel(pixel) {
        this.pixelArray.push(pixel);
    }

    getPixel(x, y, id) {
        for(let i = this.pixelArray.length; i--; ) {
            if(this.pixelArray[i].id == id) {
                continue;
            }
            
            if(this.pixelArray[i].x == x && this.pixelArray[i].y == y) {
                return this.pixelArray[i];
            }
        }
    }

    keepInBounds(pixel) {
        if(pixel.y > screenHandler.canvasHeight - 100) {
            pixel.y = screenHandler.canvasHeight - 100;
        }

        if(pixel.y < 100) {
            pixel.y = 100;
        }

        if(pixel.x > screenHandler.canvasWidth - 100) {
            pixel.x = screenHandler.canvasWidth - 100;
        }

        if(pixel.x < 100) {
            pixel.x = 100;
        }
    }

    isStuck(pixel) {
        for(let i = this.pixelArray.length; i--; ) {
            if(this.pixelArray[i].id == pixel.id) {
                continue;
            }
            
            if(this.pixelArray[i].x == pixel.x && this.pixelArray[i].y == pixel.y) {
                return true;
            }
        }
    }
    
}