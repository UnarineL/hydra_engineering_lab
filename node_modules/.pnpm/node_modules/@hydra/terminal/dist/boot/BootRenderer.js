/**
 * HYDRA I.OS
 * Boot Renderer
 *
 * Responsible for rendering the
 * Hydra boot sequence.
 */
export class BootRenderer {
    render(steps) {
        const lines = [
            "HYDRA BOOT SEQUENCE",
            "──────────────────────────────────────────────────────────",
            "",
        ];
        for (const step of steps) {
            lines.push(`[BOOT] ${step.message.padEnd(35, ".")} ${step.status}`);
        }
        return lines.join("\n");
    }
}
//# sourceMappingURL=BootRenderer.js.map