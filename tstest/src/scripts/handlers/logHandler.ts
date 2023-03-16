import { RenderHandler } from "./renderHandler";

export class LogHandler {
    private static instance: LogHandler;

    private renderHandler: RenderHandler = RenderHandler.getInstance();
    private static logs: string[] = [];

    private constructor() {
        LogHandler.logs = [];
        window.setInterval(this.printLogs, 1000);
    };

    public static getInstance(): LogHandler {
        if (!LogHandler.instance) {
            LogHandler.instance = new LogHandler();
        };

        return LogHandler.instance;
    };

    public static addLog(log: string): void {
        this.logs.push(log);
    }

    public printLogs(): void {
        if (!LogHandler.logs || LogHandler.logs.length == 0) {
            return;
        }

        this.renderHandler.addDebugText(LogHandler.logs);
        LogHandler.logs = [];
    }
}