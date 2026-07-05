/**
 * HYDRA I.OS
 * Kernel Logger Service
 *
 * Provides a centralized logging interface for
 * all Hydra components.
 */
export class LoggerService {
    /**
     * Logs informational messages.
     */
    info(message) {
        console.log(`[INFO] ${message}`);
    }
    /**
     * Logs successful operations.
     */
    success(message) {
        console.log(`[SUCCESS] ${message}`);
    }
    /**
     * Logs warning messages.
     */
    warn(message) {
        console.warn(`[WARNING] ${message}`);
    }
    /**
     * Logs error messages.
     */
    error(message) {
        console.error(`[ERROR] ${message}`);
    }
    /**
     * Logs debugging information.
     */
    debug(message) {
        console.debug(`[DEBUG] ${message}`);
    }
}
//# sourceMappingURL=LoggerService.js.map