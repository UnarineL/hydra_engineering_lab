import { BootManager } from "./boot/BootManager.js";
import { KernelContext } from "./context/KernelContext.js";

/**
 * HYDRA I.OS
 * Hydra Kernel
 *
 * The central entry point for the Hydra Kernel.
 * Responsible for booting, managing, and exposing
 * core kernel services.
 */
export class HydraKernel {
  /**
   * Kernel context.
   */
  private context: KernelContext | null = null;

  /**
   * Boots the Hydra Kernel.
   */
  public start(): void {
    const bootManager = new BootManager();

    const registry = bootManager.start();

    this.context = new KernelContext(registry);
  }

  /**
   * Returns the kernel context.
   */
  public Context(): KernelContext {
    if (!this.context) {
      throw new Error("Hydra Kernel has not been started.");
    }

    return this.context;
  }

  /**
   * Indicates whether the kernel has been started.
   */
  public isRunning(): boolean {
    return this.context !== null;
  }

  /**
   * Stops the kernel.
   *
   * Placeholder implementation.
   */
  public stop(): void {
    // TODO:
    // Implement graceful shutdown.
  }
}