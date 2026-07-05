/**
 * HYDRA I.OS
 * Kernel Lifecycle States
 *
 * Defines the operational state of the Hydra Kernel.
 * Every component within Hydra should reference these
 * states rather than maintaining its own lifecycle.
 */
export var LifecycleState;
(function (LifecycleState) {
    /**
     * Hydra is not running.
     */
    LifecycleState["OFFLINE"] = "OFFLINE";
    /**
     * Hydra is starting.
     */
    LifecycleState["BOOTING"] = "BOOTING";
    /**
     * Core services are being initialized.
     */
    LifecycleState["INITIALIZING"] = "INITIALIZING";
    /**
     * Hydra is fully operational.
     */
    LifecycleState["READY"] = "READY";
    /**
     * Hydra is preparing to shut down.
     */
    LifecycleState["STOPPING"] = "STOPPING";
    /**
     * Hydra has shut down successfully.
     */
    LifecycleState["STOPPED"] = "STOPPED";
    /**
     * Hydra encountered a fatal error.
     */
    LifecycleState["ERROR"] = "ERROR";
})(LifecycleState || (LifecycleState = {}));
//# sourceMappingURL=LifecycleState.js.map