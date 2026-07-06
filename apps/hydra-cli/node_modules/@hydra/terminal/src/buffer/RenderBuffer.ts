/**
 * HYDRA I.OS
 * Render Buffer
 *
 * Collects rendered output before it is written
 * to the terminal.
 *
 * The RenderBuffer is intentionally simple.
 * It knows nothing about Hydra, banners,
 * prompts, or terminal output.
 */
export class RenderBuffer {
  /**
   * Stored render sections.
   */
  private readonly sections: string[] = [];

  /**
   * Appends rendered content to the buffer.
   */
  public append(content: string): void {
    this.sections.push(content);
  }

  /**
   * Removes all content from the buffer.
   */
  public clear(): void {
    this.sections.length = 0;
  }

  /**
   * Produces the final rendered output.
   */
  public render(): string {
    return this.sections.join("\n");
  }

  /**
   * Indicates whether the buffer contains content.
   */
  public isEmpty(): boolean {
    return this.sections.length === 0;
  }
}