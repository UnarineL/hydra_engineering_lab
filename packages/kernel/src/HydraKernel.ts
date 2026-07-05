import { BootManager } from "./boot/BootManager.js";
import { ServiceRegistry } from "./registry/ServiceRegistry.js";

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
   * Kernel service registry.
   */
  private registry: ServiceRegistry | null = null;

  /**
   * Boots the Hydra Kernel.
   */
  public start(): void {
    const bootManager = new BootManager();

    this.registry = bootManager.start();
  }

  /**
   * Returns the kernel service registry.
   */
  public getRegistry(): ServiceRegistry {
    if (!this.registry) {
      throw new Error("Hydra Kernel has not been started.");
    }

    return this.registry;
  }

  /**
   * Indicates whether the kernel has been started.
   */
  public isRunning(): boolean {
    return this.registry !== null;
  }

  /**
   * Stops the kernel.
   *
   * Placeholder implementation.
   * A full shutdown sequence will be introduced
   * in a future milestone.
   */
  public stop(): void {
    // TODO:
    // Implement graceful shutdown.
  }
}