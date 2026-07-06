import { LifecycleManager } from "../lifecycle/LifecycleManager.js";
import { ServiceRegistry } from "../registry/ServiceRegistry.js";
import { LoggerService } from "../services/LoggerService.js";

/**
 * HYDRA I.OS
 * Kernel Context
 *
 * Provides strongly-typed access to kernel services.
 */
export class KernelContext {
constructor(
    private readonly serviceRegistry: ServiceRegistry
) {}

  /**
   * Returns the underlying service registry.
   */
 public registry(): ServiceRegistry {
    return this.serviceRegistry;
}

  /**
   * Returns the kernel logger.
   */
  public logger(): LoggerService {
    return this.serviceRegistry.resolve<LoggerService>("logger");
  }

  /**
   * Returns the lifecycle manager.
   */
  public lifecycle(): LifecycleManager {
    return this.serviceRegistry.resolve<LifecycleManager>("lifecycle");
  }
}