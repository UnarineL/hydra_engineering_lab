import { RenderBuffer } from "../buffer/RenderBuffer.js";
import type { TerminalStatus } from "../models/TerminalStatus.js";
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
  private readonly banner = new BannerRenderer();
  private readonly status = new StatusRenderer();
  private readonly prompt = new PromptRenderer();
  private readonly buffer = new RenderBuffer();

  /**
   * Renders the complete Hydra terminal.
   */
  public render(status: TerminalStatus): void {
    this.buffer.clear();

    this.buffer.append(this.banner.render());
    this.buffer.append(this.status.render(status));
    this.buffer.append(this.prompt.render(status.session));

    console.log(this.buffer.render());
  }
}