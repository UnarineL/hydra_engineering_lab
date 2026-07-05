import { RenderBuffer } from "../buffer/RenderBuffer.js";
import { BannerRenderer } from "./BannerRenderer.js";
import { PromptRenderer } from "./PromptRenderer.js";
import { StatusRenderer } from "./StatusRenderer.js";
/**
 * HYDRA I.OS
 * Terminal Renderer
 *
 * Coordinates the rendering pipeline for the Hydra terminal.
 */
export class TerminalRenderer {
    banner = new BannerRenderer();
    status = new StatusRenderer();
    prompt = new PromptRenderer();
    buffer = new RenderBuffer();
    /**
     * Renders the complete Hydra terminal.
     */
    render(status) {
        this.buffer.clear();
        this.buffer.append(this.banner.render());
        this.buffer.append(this.status.render(status));
        this.buffer.append(this.prompt.render(status.session));
        console.log(this.buffer.render());
    }
}
//# sourceMappingURL=TerminalRenderer.js.map