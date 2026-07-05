import { BannerRenderer } from "./BannerRenderer.js";
import { StatusRenderer } from "./StatusRenderer.js";
import { PromptRenderer } from "./PromptRenderer.js";
import type { TerminalStatus } from "../models/TerminalStatus.js";

export class TerminalRenderer {
    private readonly banner = new BannerRenderer();
    private readonly status = new StatusRenderer();
    private readonly prompt = new PromptRenderer();

    public render(status: TerminalStatus): void {
        const output = [
            this.banner.render(),
            this.status.render(status),
            this.prompt.render(status.session),
        ].join("\n");

        console.log(output);
    }
}