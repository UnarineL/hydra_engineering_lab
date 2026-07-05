import { TerminalRenderer } from "./renderer/TerminalRenderer.js";

export class Terminal {
    private readonly renderer = new TerminalRenderer();

    public start(): void {
        this.renderer.render({
            kernel: "READY",
            engine: "CORE",
            mode: "DISCUSS",
            project: "hydra_engineering_lab",
            git: "CLEAN",
            session: "Founder",
        });
    }
}