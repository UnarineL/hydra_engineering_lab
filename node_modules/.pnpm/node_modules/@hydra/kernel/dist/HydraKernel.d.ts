import { KernelContext } from "./context/KernelContext.js";
/**
 * HYDRA I.OS
 * Hydra Kernel
 *
 * The central entry point for the Hydra Kernel.
 * Responsible for booting, managing, and exposing
 * core kernel services.
 */
export declare class HydraKernel {
    /**
     * Kernel context.
     */
    private context;
    /**
     * Boots the Hydra Kernel.
     */
    start(): void;
    /**
     * Returns the kernel context.
     */
    Context(): KernelContext;
    /**
     * Indicates whether the kernel has been started.
     */
    isRunning(): boolean;
    /**
     * Stops the kernel.
     *
     * Placeholder implementation.
     */
    stop(): void;
}
//# sourceMappingURL=HydraKernel.d.ts.map