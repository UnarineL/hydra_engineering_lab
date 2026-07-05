import type { BootStep } from "./BootStep.js";

/**
 * HYDRA I.OS
 * Boot Sequence
 *
 * Defines the ordered startup sequence
 * for the Hydra terminal.
 */
export class BootSequence {
  public getSteps(): readonly BootStep[] {
    return [
      {
        message: "Initializing Hydra Kernel",
        status: "OK",
      },
      {
        message: "Registering Core Services",
        status: "OK",
      },
      {
        message: "Loading HydraShell",
        status: "OK",
      },
      {
        message: "Restoring Workspace",
        status: "OK",
      },
      {
        message: "Hydra Ready",
        status: "OK",
      },
    ];
  }
}