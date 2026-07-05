/**
 * HYDRA I.OS
 * Kernel Logger Service
 *
 * Provides a centralized logging interface for
 * all Hydra components.
 */
export declare class LoggerService {
    /**
     * Logs informational messages.
     */
    info(message: string): void;
    /**
     * Logs successful operations.
     */
    success(message: string): void;
    /**
     * Logs warning messages.
     */
    warn(message: string): void;
    /**
     * Logs error messages.
     */
    error(message: string): void;
    /**
     * Logs debugging information.
     */
    debug(message: string): void;
}
//# sourceMappingURL=LoggerService.d.ts.map