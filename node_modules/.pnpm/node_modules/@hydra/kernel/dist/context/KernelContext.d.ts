import { LifecycleManager } from "../lifecycle/LifecycleManager.js";
import { ServiceRegistry } from "../registry/ServiceRegistry.js";
import { LoggerService } from "../services/LoggerService.js";
/**
 * HYDRA I.OS
 * Kernel Context
 *
 * Provides strongly-typed access to kernel services.
 */
export declare class KernelContext {
    private readonly serviceRegistry;
    constructor(serviceRegistry: ServiceRegistry);
    /**
     * Returns the underlying service registry.
     */
    registry(): ServiceRegistry;
    /**
     * Returns the kernel logger.
     */
    logger(): LoggerService;
    /**
     * Returns the lifecycle manager.
     */
    lifecycle(): LifecycleManager;
}
//# sourceMappingURL=KernelContext.d.ts.map