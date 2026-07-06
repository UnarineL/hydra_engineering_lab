import { LifecycleState } from "./LifecycleState.js";
/**
 * Manages the lifecycle state of the Hydra Kernel.
 *
 * This class is the single source of truth for the
 * operational state of the system.
 */
export declare class LifecycleManager {
    /**
     * Current lifecycle state.
     */
    private state;
    /**
     * Returns the current lifecycle state.
     */
    getState(): LifecycleState;
    /**
     * Transitions the kernel to a new lifecycle state.
     */
    transitionTo(state: LifecycleState): void;
    /**
     * Returns true when Hydra is fully operational.
     */
    isReady(): boolean;
    /**
     * Returns true when Hydra is shutting down.
     */
    isStopping(): boolean;
    /**
     * Returns true when Hydra encountered a fatal error.
     */
    hasFailed(): boolean;
}
//# sourceMappingURL=LifecycleManager.d.ts.map