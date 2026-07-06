/**
 * HYDRA I.OS
 * Service Registry
 *
 * Stores and provides access to shared kernel services.
 */
export class ServiceRegistry {
    /**
     * Internal service storage.
     */
    services = new Map();
    /**
     * Registers a service instance.
     */
    register(name, service) {
        this.services.set(name, service);
    }
    /**
     * Retrieves a registered service.
     */
    resolve(name) {
        const service = this.services.get(name);
        if (!service) {
            throw new Error(`Service "${name}" has not been registered.`);
        }
        return service;
    }
    /**
     * Determines whether a service exists.
     */
    has(name) {
        return this.services.has(name);
    }
}
//# sourceMappingURL=ServiceRegistry.js.map