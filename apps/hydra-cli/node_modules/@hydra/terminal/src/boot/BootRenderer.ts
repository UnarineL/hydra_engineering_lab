import type { BootStep } from "./BootStep.js";

/**
 * HYDRA I.OS
 * Boot Renderer
 *
 * Responsible for rendering the
 * Hydra boot sequence.
 */
export class BootRenderer {
  public render(steps: readonly BootStep[]): string {
    const lines = [
      "HYDRA BOOT SEQUENCE",
      "──────────────────────────────────────────────────────────",
      "",
    ];

    for (const step of steps) {
      lines.push(
        `[BOOT] ${step.message.padEnd(35, ".")} ${step.status}`,
      );
    }

    return lines.join("\n");
  }
}