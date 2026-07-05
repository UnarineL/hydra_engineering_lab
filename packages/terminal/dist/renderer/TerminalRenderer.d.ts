import type { TerminalStatus } from "../models/TerminalStatus.js";
/**
 * HYDRA I.OS
 * Terminal Renderer
 *
 * Coordinates the rendering pipeline for the Hydra terminal.
 */
export declare class TerminalRenderer {
    private readonly banner;
    private readonly status;
    private readonly prompt;
    private readonly buffer;
    /**
     * Renders the complete Hydra terminal.
     */
    render(status: TerminalStatus): void;
}
//# sourceMappingURL=TerminalRenderer.d.ts.map