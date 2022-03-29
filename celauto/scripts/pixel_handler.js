class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    // Taken from https://stackoverflow.com/a/39077686
    toHex() {
        let toReturnHex = "#" + [this.r, this.g, this.b].map(c => {
            let hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }).join('');

        return toReturnHex;
    }
}

const PixelType = {
    EMPTY : {
        value: -1, 
        color: new Color(0, 0, 0), 
        fallSpeed: 0
    },
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
        this.updated = false;
    }

    static generateId() {
        if(!this.lastId) {
            this.lastId = 1;
        } else {
            this.lastId++;
        }

        return this.lastId;
    }

    update() {
        switch(this.pixelType) {
            case PixelType.SAND:
                this.keepInBounds();
                this.updateSand();
                break;
            case PixelType.WATER:
                this.keepInBounds();
                this.updateWater();
                break;
        }
    }

    keepInBounds() {
        if(this.y > height - 100) {
            this.y = height - 100;
        }

        if(this.y < 100) {
            this.y = 100;
        }

        if(this.x > width - 100) {
            this.x = width - 100;
        }

        if(this.x < 100) {
            this.x = 100;
        }
    }

    updateSand() {
        const surroundingIndices = [
            { x: this.x, y: (this.y + height + 1) % height },                       // Bottom
            { x: (this.x + width + 1) % width, y: (this.y + height + 1) % height }, // Bottom Right
            { x: (this.x + width - 1) % width, y: (this.y + height + 1) % height }  // Bottom Left
        ];

        for(let i = 0; i < 3; ++i) {
            let surroundingIndex = surroundingIndices[i];
            if(pixelArray[surroundingIndex.x][surroundingIndex.y].pixelType == PixelType.EMPTY) {
                pixelArray[surroundingIndex.x][surroundingIndex.y] = this;
                pixelArray[this.x][this.y] = new Pixel(this.x, this.y, 1, 1, PixelType.EMPTY);
                this.x = surroundingIndex.x;
                this.y = surroundingIndex.y;
                break;
            }
        }

        screenHandler.addPixelToPixelCache(this);
    }

    updateWater() {

    }
}

var pixelArray = Array(height).fill(Array(width));

for(let x = 0; x < width; ++x) {
    for(let y = 0; y < height; ++y) {
        pixelArray[x][y] = new Pixel(x, y, 1, 1, PixelType.EMPTY);
    }
}

class PixelHandler {
    start() {
        return;
    }

    update() {
        for(let y = height - 1; y > 0; --y) {
            for(let x = 0; x < width; ++x) {
                if(pixelArray[x][y].pixelType == PixelType.EMPTY) {
                    continue;
                }

                pixelArray[x][y].update();
            }
        }

        screenHandler.drawPixelCache();
    }

    writePixel(x, y, pixel) {
        pixelArray[x][y] = pixel;
    }
}