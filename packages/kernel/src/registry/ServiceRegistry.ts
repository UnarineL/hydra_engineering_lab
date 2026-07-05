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
  private readonly services = new Map<string, unknown>();

  /**
   * Registers a service instance.
   */
  public register<T>(name: string, service: T): void {
    this.services.set(name, service);
  }

  /**
   * Retrieves a registered service.
   */
  public resolve<T>(name: string): T {
    const service = this.services.get(name);

    if (!service) {
      throw new Error(`Service "${name}" has not been registered.`);
    }

    return service as T;
  }

  /**
   * Determines whether a service exists.
   */
  public has(name: string): boolean {
    return this.services.has(name);
  }
}