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
export declare class RenderBuffer {
    /**
     * Stored render sections.
     */
    private readonly sections;
    /**
     * Appends rendered content to the buffer.
     */
    append(content: string): void;
    /**
     * Removes all content from the buffer.
     */
    clear(): void;
    /**
     * Produces the final rendered output.
     */
    render(): string;
    /**
     * Indicates whether the buffer contains content.
     */
    isEmpty(): boolean;
}
//# sourceMappingURL=RenderBuffer.d.ts.map