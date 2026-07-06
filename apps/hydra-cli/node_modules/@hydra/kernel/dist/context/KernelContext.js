/**
 * HYDRA I.OS
 * Kernel Context
 *
 * Provides strongly-typed access to kernel services.
 */
export class KernelContext {
    serviceRegistry;
    constructor(serviceRegistry) {
        this.serviceRegistry = serviceRegistry;
    }
    /**
     * Returns the underlying service registry.
     */
    registry() {
        return this.serviceRegistry;
    }
    /**
     * Returns the kernel logger.
     */
    logger() {
        return this.serviceRegistry.resolve("logger");
    }
    /**
     * Returns the lifecycle manager.
     */
    lifecycle() {
        return this.serviceRegistry.resolve("lifecycle");
    }
}
//# sourceMappingURL=KernelContext.js.map