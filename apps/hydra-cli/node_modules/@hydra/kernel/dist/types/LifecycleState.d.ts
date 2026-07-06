/**
 * HYDRA I.OS
 * Kernel Lifecycle States
 *
 * Defines the operational state of the Hydra Kernel.
 * Every component within Hydra should reference these
 * states rather than maintaining its own lifecycle.
 */
export declare enum LifecycleState {
    /**
     * Hydra is not running.
     */
    OFFLINE = "OFFLINE",
    /**
     * Hydra is starting.
     */
    BOOTING = "BOOTING",
    /**
     * Core services are being initialized.
     */
    INITIALIZING = "INITIALIZING",
    /**
     * Hydra is fully operational.
     */
    READY = "READY",
    /**
     * Hydra is preparing to shut down.
     */
    STOPPING = "STOPPING",
    /**
     * Hydra has shut down successfully.
     */
    STOPPED = "STOPPED",
    /**
     * Hydra encountered a fatal error.
     */
    ERROR = "ERROR"
}
//# sourceMappingURL=LifecycleState.d.ts.map