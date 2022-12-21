import { RenderHandler } from "./renderHandler";

export class LogHandler {
    private static instance: LogHandler;

    private renderHandler: RenderHandler = RenderHandler.getInstance();
    private logs: string[] = [];

    private constructor() {
        this.logs = [];
        window.setInterval(this.printLogs, 1000);
    };

    public static getInstance(): LogHandler {
        if (!LogHandler.instance) {
            LogHandler.instance = new LogHandler();
        };

        return LogHandler.instance;
    };

    public addLog(log: string): void {
        this.logs.push(log);
    }

    public printLogs(): void {
        if (!this.logs || this.logs.length == 0) {
            return;
        }

        this.renderHandler.addDebugText(this.logs);
        this.logs = [];
    }
}