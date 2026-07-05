import { LoggerService } from "../services/LoggerService.js";
import { LifecycleManager } from "../lifecycle/LifecycleManager.js";
import { ServiceRegistry } from "../registry/ServiceRegistry.js";
import { LifecycleState } from "../types/LifecycleState.js";
/**
 * HYDRA I.OS
 * Boot Manager
 *
 * Responsible for initializing the Hydra kernel.
 */
export class BootManager {
    /**
     * Starts the Hydra kernel.
     */
    start() {
        const logger = new LoggerService();
        const lifecycle = new LifecycleManager();
        const registry = new ServiceRegistry();
        logger.info("Initializing Hydra Kernel...");
        lifecycle.transitionTo(LifecycleState.BOOTING);
        registry.register("logger", logger);
        registry.register("lifecycle", lifecycle);
        lifecycle.transitionTo(LifecycleState.READY);
        logger.success("Hydra Kernel initialized successfully.");
        return registry;
    }
}
//# sourceMappingURL=BootManager.js.map