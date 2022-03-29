export class InputHandler {
    private static instance: InputHandler;
    private constructor() {}

    public static getInstance() : InputHandler {
        if(!InputHandler.instance) {
            InputHandler.instance = new InputHandler();
        }

        return InputHandler.instance;
    }

    public start() : void {
        return;
    }

    public update() : void {
        return;
    }
}