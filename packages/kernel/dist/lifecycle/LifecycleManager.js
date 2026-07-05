import { LifecycleState } from "./LifecycleState.js";
/**
 * Manages the lifecycle state of the Hydra Kernel.
 *
 * This class is the single source of truth for the
 * operational state of the system.
 */
export class LifecycleManager {
    /**
     * Current lifecycle state.
     */
    state = LifecycleState.OFFLINE;
    /**
     * Returns the current lifecycle state.
     */
    getState() {
        return this.state;
    }
    /**
     * Transitions the kernel to a new lifecycle state.
     */
    transitionTo(state) {
        this.state = state;
    }
    /**
     * Returns true when Hydra is fully operational.
     */
    isReady() {
        return this.state === LifecycleState.READY;
    }
    /**
     * Returns true when Hydra is shutting down.
     */
    isStopping() {
        return this.state === LifecycleState.STOPPING;
    }
    /**
     * Returns true when Hydra encountered a fatal error.
     */
    hasFailed() {
        return this.state === LifecycleState.ERROR;
    }
}
//# sourceMappingURL=LifecycleManager.js.map