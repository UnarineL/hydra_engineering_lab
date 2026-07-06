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
    sections = [];
    /**
     * Appends rendered content to the buffer.
     */
    append(content) {
        this.sections.push(content);
    }
    /**
     * Removes all content from the buffer.
     */
    clear() {
        this.sections.length = 0;
    }
    /**
     * Produces the final rendered output.
     */
    render() {
        return this.sections.join("\n");
    }
    /**
     * Indicates whether the buffer contains content.
     */
    isEmpty() {
        return this.sections.length === 0;
    }
}
//# sourceMappingURL=RenderBuffer.js.map