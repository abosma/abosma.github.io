export class Pixel {
    public x : number;
    public y : number;
    public w : number = 1;
    public state : number = 0;
    
    public constructor(x?, y?, w?) {
        if(x !== undefined) {
            this.x = x;
        };

        if(y !== undefined) {
            this.y = y;
        };

        if(w !== undefined) {
            this.w = w;
        }
    };
};