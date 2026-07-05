/**
 * HYDRA I.OS
 * Service Registry
 *
 * Stores and provides access to shared kernel services.
 */
export declare class ServiceRegistry {
    /**
     * Internal service storage.
     */
    private readonly services;
    /**
     * Registers a service instance.
     */
    register<T>(name: string, service: T): void;
    /**
     * Retrieves a registered service.
     */
    resolve<T>(name: string): T;
    /**
     * Determines whether a service exists.
     */
    has(name: string): boolean;
}
//# sourceMappingURL=ServiceRegistry.d.ts.map