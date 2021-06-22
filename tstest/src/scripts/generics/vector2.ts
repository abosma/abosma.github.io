export class Vector2 {
    x : number = 0.0;
    y : number = 0.0;

    constructor(x?, y?) {
        if(x !== undefined) {
            this.x = x;
        }

        if(y !== undefined) {
            this.y = y;
        }
    }
}